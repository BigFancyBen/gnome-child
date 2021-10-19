import './App.css';
import React from 'react';
import Screen from './screen/Screen';
import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';
import Minimap from './minimap/Minimap';

import Chat from './chat/Chat';


function App() {
  return (
    <div className="App">
      <Screen />
      <Minimap />
      <VideoBackground />
      <Backpack />
      <Chat />
    </div>
  );
}

export default App;