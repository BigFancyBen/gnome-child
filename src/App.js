import './App.css';
import React from 'react';

import Screen from './screen/Screen';
import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';
import Minimap from './minimap/Minimap';

function App() {
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