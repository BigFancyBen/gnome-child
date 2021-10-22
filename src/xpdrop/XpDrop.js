import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import '../images/woodcutting.png';

const XpDropOuter = styled.div`
  z-index: 70;
  position: absolute;
  right: 525px;
  bottom: 675px;
  font-family: 'Runescape Chat';
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: transform 2s linear;
  transform: translateY(0);
`;

const XpDropXp = styled.div`
  color: white;
  font-size: 25px;
  text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
  padding-top: 5px;
  margin-left: 5px;
`;




function XpDrop(){
  const [dropShowing, setDropShowing] = useState(false);
  const curXpDrop = useRef(null)
  window.addEventListener('aPressed', e => setDropShowing(true));

  useEffect(() => {
    if(dropShowing === false){ return false}
    curXpDrop.current.style.transform = 'translateY(-300px)';
    setTimeout(
      function() {
        setDropShowing(false);
      }, 2000);
  }, [dropShowing])

  return (
    <React.Fragment>
      {dropShowing && 
        <XpDropOuter ref={curXpDrop}>
          <img src="./images/woodcutting.png" alt="" />
          <XpDropXp>+30</XpDropXp>
        </XpDropOuter>
      }
      <h1 style={{zIndex: "99", position: "absolute", color: "white"}} onClick={setDropShowing}>XP Drop</h1>
    </React.Fragment>
  );
}
export default XpDrop;