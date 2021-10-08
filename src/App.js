import './App.css';
import React from 'react';

import Screen from './screen/Screen';
import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';

function App() {
  return (
    <div className="App">
      <Screen />
      <VideoBackground />
      <Backpack />
    </div>
  );
}

export default App;