import React, {useEffect, useState} from 'react';
import Backpack from '../inventory/Backpack';
import LevelUp from '../levelup/Levelup';
import XpDrop from '../xpdrop/XpDrop';
const OBSWebSocket = require('obs-websocket-js');


function Poller() {
  const [inventory, setInventory] = useState([]);
  const [xpDrop, setXpDrop] = useState([]);
  const [levelUp, setLevelUp] = useState(null);
  const obs = new OBSWebSocket();

  // You must add this handler to avoid uncaught exceptions.

  function handlePoll(data){
    if (Object.keys(data).length === 0){return}
    if(data.inventory.length > 0) {
      setInventory(data.inventory);
    }
    if(data.xpDrop > 0){
      setXpDrop(xpDrop => [...xpDrop, data.xpDrop]);
    }
    if(data.levelsGained > 0){
      setLevelUp(data.levelsGained);
    }
    if(data.banking){
      if(data.banking === "banking"){
        obs.send('SetCurrentScene', {
          'scene-name': "Banking Scene"
        });
      }
      if(data.banking === "back"){
        obs.send('SetCurrentScene', {
          'scene-name': "Tree Scene"
        });
      }
    }
    if(data.bankedLoot > 0){
      console.log(data.bankedLoot);
    }
  }

  useEffect(() => {
    getInitialInventory();
    obs.connect({
      address: 'localhost:4444',
      password: 'verysecurelol'
    })
    .then(() => {
        console.log(`obs connected`);
  
        setObs(obs);
    })
    .catch(err => { 
        console.log(err);
    });

    setInterval(
      function() {
        fetch("http://localhost:6969/clientPoll", {
          "method": "GET",
          "headers": {'Content-Type': 'application/json'}
        })
        .then(response => {
          response.json().then(parsedJson => {
            if(parsedJson !== undefined){
              handlePoll(parsedJson);
            }
          })
        })
        .catch(err => {
          console.error(err);
        });
      }, 200);

  }, [])

  useEffect(() => {
    if(obs === null){return}
    obs.on('error', err => {
      console.error('socket error:', err);
      });
  }, [obs])

  return (
    <div className="Poller">
      <Backpack inventory={inventory} />
      <LevelUp levelUp={levelUp} />
      <XpDrop xp={xpDrop || undefined} />
    </div>
  );
}

function getInitialInventory(){
  fetch("http://localhost:6969/sendAction", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": "{\"action\":\"LIST_INVENTORY\"}"
  })
  .then(response => {
    console.log("initial inventory");
  })
  .catch(err => {
    console.error(err);
  });
}

export default Poller;