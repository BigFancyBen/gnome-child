import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import '../images/woodcuttingLevel.png';

const LevelUpOuter = styled.div`
  z-index: 70;
  position: absolute;
  left: 0;
  bottom: 48px;
  font-family: 'Runescape NPC Chat';
  background-image: url('./images/woodcuttingLevel.png');
  width: 1040px;
  height: 282px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  display: none;
`;

const LvlUpMessage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 60px;
  width: 85%;
  height: 85%;
  margin-right: 20px;
`;

const Congrats = styled.div`
  color: #002783;
  margin-top: 25px;
`;

const YourLevel = styled.div`
  color: black;
  padding: 20px 0;
`;

const ClickContinue = styled.div`
  color: #0000ff;
`;

function LevelUp(props){

  const [levelShowing, setLevelShowing] = useState(false);
  const [curLevel, setCurLevel] = useState(1);
  const curLevelUp = useRef(null)

  useEffect(() => {
    if(levelShowing === false){ return false}
    setCurLevel(curLevel + 1);
    curLevelUp.current.style.display = 'flex';
    setTimeout(
      function() {
        setLevelShowing(false);
      }, 5000);
  }, [levelShowing])

  useEffect(() => {
    if(props.levelUp > 0) {
      setLevelShowing(true);
    } 
  }, [props.levelUp])

  return (
    <React.Fragment>
    { levelShowing &&
      <LevelUpOuter ref={curLevelUp}>
        <LvlUpMessage>
          <Congrats>Congratulations, you just advanced a Woodcutting level.</Congrats>
          <YourLevel>Your Woodcutting level is now {props.levelUp}.</YourLevel>
          <ClickContinue>Click here to continue</ClickContinue>
        </LvlUpMessage>
      </LevelUpOuter>
    }
    </React.Fragment>
  );
}
export default LevelUp;