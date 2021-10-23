import React, { useEffect, useState } from 'react';

function JoyconInt() {
  const [controllerConnected, setControllerConnected] = useState(false);
  const [gamepad, setGamepad] = useState(null)
  window.addEventListener("gamepadconnected", function(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gp.index, gp.id,
      gp.buttons.length, gp.axes.length);
    setControllerConnected(true);
  });

  useEffect(() => {
    if(!controllerConnected){return};

    function doButtons() {
      const b = navigator.getGamepads()[0];
      if(b?.buttons[0].pressed){
        console.log(b.axes);
        window.dispatchEvent(new CustomEvent('aPressed', { pressed: true }));
      }
    }
    doButtons()
    const interval = setInterval(() => doButtons(), 600)
    return () => {
      clearInterval(interval);
    }
  }, [controllerConnected])

  useEffect(() => {
    console.log(gamepad?.buttons);
  }, [gamepad])

  return (
    <div className="joyconerg">
      bruh
    </div>
  );
}

export default JoyconInt;