import './App.css';
import React from 'react';
import Screen from './screen/Screen';
import Minimap from './minimap/Minimap';
import Chat from './chat/Chat';
import Clock from './clock/Clock';
import Poller from './poller/Poller';

function App() {
  return (
    <div className="App">
      <Screen />
      <Minimap />
      <Poller />
      <Chat />
      <Clock />
    </div>
  );
}

export default App;