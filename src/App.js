import './App.css';
import React from 'react';

import VideoBackground from './video/VideoBackground';
import Backpack from './inventory/Backpack';

function App() {
  return (
    <div className="App">
      <VideoBackground />
      <Backpack />
    </div>
  );
}

export default App;