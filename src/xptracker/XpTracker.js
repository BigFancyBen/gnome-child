import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import '../images/woodcutting.png';
const levelJson = require('../levels.json');

const XpTrackerOuter = styled.div`
  background-color: rgba(41, 31, 8,.6);
  border: 2px solid rgba(41, 31, 8,.6);
  position: absolute;
  left: 750px;
  top: 20px;
  width: 150px;
  height: 45px;
  img{
    margin-top: 5px;
    height: 25px;
    width: 25px;
  }
`;

const CurXp = styled.div`
  text-align: right;
  font-family: 'Runescape Chat';
  position: absolute;
  font-size: 18px;
  top: 10px;
  right: 5px;
  color: white;
  text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
`;

const XpBarOuter = styled.div`
  width: 100%;
  background-color: black;
  height: 10px;
  position: absolute;
  bottom: 0;
  left:0;
`;

const CurXpBar = styled.div`
  background-color: #00bc00;
  max-width: calc(100% - 3px);
  height: calc(100% - 3px);
  position: absolute;
  top: 2px;
  left: 1px;
`;


function XpTracker(props){

  const [trackerShowing, setTrackerShowing] = useState(false);
  const curXpTracker = useRef(null);

  useEffect(() => {
    if(trackerShowing === false){ return false}
    curXpTracker.current.style.display = 'flex';
    setTimeout(
      function() {
        setTrackerShowing(false);
      }, 5000);
  }, [trackerShowing])

  useEffect(() => {
    if(props.currentXp > 0) {
      setTrackerShowing(true);
    } 
  }, [props.currentXp])

  return (
    <React.Fragment>
    { trackerShowing &&
      <XpTrackerOuter ref={curXpTracker}>
        <img src="./images/woodcutting.png" alt="" />
        <CurXp>{props.currentXp.toLocaleString()}</CurXp>
        <XpBarOuter><CurXpBar style={{width: `${calcPercentage(props.currentXp, props.xpToLevel)}%`}} /></XpBarOuter>
      </XpTrackerOuter>
    }
    </React.Fragment>
  );
}
export default XpTracker;

function calcPercentage(xp, xpLeft){
  const xpForLevel = findLevelXp(xp);
  const percent = 100-(xpLeft/xpForLevel*100);
  return percent;
}

function findLevelXp(xp){
  //reference json with currentXp to find xpNeeded
  for(let i=0; i<98;i++){
    if(levelJson[i].levStarts>xp){
      return levelJson[i-1].xpNeeded;
    }
  }
}