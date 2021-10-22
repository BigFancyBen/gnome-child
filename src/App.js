import './App.css';
import React from 'react';
import Screen from './screen/Screen';
import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';
import Minimap from './minimap/Minimap';
import Chat from './chat/Chat';
import Clock from './clock/Clock';
import LevelUp from './levelup/Levelup';
import XpDrop from './xpdrop/XpDrop';
import Joycon from './joycon/JoyconInt';

function App() {
  return (
    <div className="App">
      <Screen />
      <Minimap />
      <VideoBackground />
      <Backpack />
      <Chat />
      <Clock />
      <LevelUp />
      <XpDrop />
      <Joycon />
    </div>
  );
}

export default App;