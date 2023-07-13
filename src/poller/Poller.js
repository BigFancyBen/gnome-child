import React, { useEffect, useState } from "react";
import Backpack from "../inventory/Backpack";
import LevelUp from "../levelup/Levelup";
import XpDrop from "../xpdrop/XpDrop";
import Bank from "../bank/Bank";
import XpTracker from "../xptracker/XpTracker";
import OBSWebSocket from "obs-websocket-js";
import "../sounds/tree-knocked.wav";

function Poller() {
  const [inventory, setInventory] = useState([]);
  const [xpDrop, setXpDrop] = useState([]);
  const [levelUp, setLevelUp] = useState(null);
  const [bankLoot, setBankLoot] = useState(null);
  const [xpLeft, setXpLeft] = useState(null);
  const [curXp, setCurXp] = useState(null);
  const obs = new OBSWebSocket();
  const audio = new Audio("./sounds/tree-knocked.wav");

  async function connectOBS() {
    const response = await obs.connect("ws://localhost:4444", "verysecurelol");
    console.log("obs web socket connected");
    await obs.callBatch([
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 1,
          sceneItemEnabled: false,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 2,
          sceneItemEnabled: false,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 3,
          sceneItemEnabled: false,
        },
      },
    ]);
  }

  async function hideTree() {
    await obs.call("SetSceneItemEnabled", {
      sceneName: "WC BG",
      sceneItemId: 2,
      sceneItemEnabled: false,
    });
  }

  async function showTree() {
    await obs.call("SetSceneItemEnabled", {
      sceneName: "WC BG",
      sceneItemId: 2,
      sceneItemEnabled: true,
    });
  }

  async function goToBank() {
    await obs.callBatch([
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 1,
          sceneItemEnabled: true,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 2,
          sceneItemEnabled: false,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 3,
          sceneItemEnabled: true,
        },
      },
    ]);
  }
  async function doneBanking() {
    await obs.callBatch([
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 1,
          sceneItemEnabled: false,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 2,
          sceneItemEnabled: true,
        },
      },
      {
        requestType: "SetSceneItemEnabled",
        requestData: {
          sceneName: "BANKING BG",
          sceneItemId: 3,
          sceneItemEnabled: false,
        },
      },
    ]);
  }

  function handlePoll(data) {
    if (Object.keys(data).length === 0) {
      return;
    }
    if (data.inventory.length > 0) {
      setInventory(data.inventory);
    }
    if (data.xpDrop > 0) {
      setXpDrop((xpDrop) => [...xpDrop, data.xpDrop]);
    }
    if (data.levelsGained > 0) {
      setLevelUp(data.levelsGained);
    }
    if (data.currentXp > 0) {
      setCurXp(data.currentXp);
    }
    if (data.xpToLevel > 0) {
      setXpLeft(data.xpToLevel);
    }
    if (data.banking) {
      if (data.banking === "banking") {
        goToBank();
      }
      if (data.banking === "back") {
        doneBanking();
      }
    }
    if (data.treeIndicator) {
      if (data.treeIndicator === "TREE") {
        showTree();
      }
      if (data.treeIndicator === "STUMP") {
        audio.play();
        hideTree();
      }
    }
    if (data.bankedLoot.length > 0) {
      setBankLoot(data.bankedLoot);
    }
  }

  useEffect(() => {
    getInitialInventory();
    connectOBS();
    setInterval(function () {
      fetch("http://localhost:6969/clientPoll", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          response.json().then((parsedJson) => {
            if (parsedJson !== undefined) {
              handlePoll(parsedJson);
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }, 200);
  }, []);

  useEffect(() => {
    if (obs === null) {
      return;
    }
    obs.on("error", (err) => {
      console.error("socket error:", err);
    });
  }, [obs]);

  return (
    <div className="Poller">
      <Backpack inventory={inventory} />
      <LevelUp levelUp={levelUp} />
      <XpDrop xp={xpDrop || undefined} />
      <Bank bankedLoot={bankLoot} />
      <XpTracker xpToLevel={xpLeft} currentXp={curXp} />
    </div>
  );
}

function getInitialInventory() {
  fetch("http://localhost:6969/sendAction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: '{"action":"LIST_INVENTORY"}',
  })
    .then((response) => {
      console.log("initial inventory");
    })
    .catch((err) => {
      console.error(err);
    });
}

export default Poller;
