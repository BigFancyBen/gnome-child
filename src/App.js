import './App.css';
import React from 'react';

import Screen from './screen/Screen';
import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';
import Minimap from './minimap/Minimap';

function App() {
  console.log(process.env.REACT_APP_TWITCH_SECRET);
  return (
    <div className="App">
      <Screen />
      <Minimap />
      <VideoBackground />
      <Backpack />
    </div>
  );
}

export default App;