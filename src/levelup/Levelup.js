import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../images/woodcuttingLevel.png';

const LevelUpOuter = styled.div`
  z-index: 70;
  position: absolute;
  left: 0;
  bottom: 47px;
  font-family: 'Runescape NPC Chat';
  background-image: url('./images/woodcuttingLevel.png');
  width: 68vw;
  height: 28vh;
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

function LevelUp(){

  return (
    <LevelUpOuter>
      <LvlUpMessage>
        <Congrats>Congratulations, you just advanced a Woodcutting level.</Congrats>
        <YourLevel>Your Woodcutting level is now 5.</YourLevel>
        <ClickContinue>Click here to continue</ClickContinue>
      </LvlUpMessage>
    </LevelUpOuter>
  );
}
export default LevelUp;