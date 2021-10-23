import React, {useEffect, useState} from 'react';
import Backpack from '../inventory/Backpack';
import LevelUp from '../levelup/Levelup';
import XpDrop from '../xpdrop/XpDrop';


function Poller() {
  const [inventory, setInventory] = useState([]);
  const [xpDrop, setXpDrop] = useState([]);
  const [levelUp, setLevelUp] = useState(null);

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
  }
  useEffect(() => {
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
      }, 100);

  }, [])


  return (
    <div className="Poller">
      <Backpack inventory={inventory} />
      <LevelUp levelUp={levelUp} />
      <XpDrop xp={xpDrop || undefined} />
    </div>
  );
}

export default Poller;