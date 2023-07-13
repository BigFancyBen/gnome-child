import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../images/woodcutting.png";

const XpDropOuter = styled.div`
  z-index: 70;
  position: absolute;
  right: 525px;
  bottom: 675px;
  font-family: "Runescape Chat";
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: transform 2s linear;
  transform: translateY(0);

  &.visible {
    visibility: visible;
  }
  &.hidden {
    visibility: hidden;
  }
`;

const XpDropXp = styled.div`
  color: white;
  font-size: 25px;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
  padding-top: 5px;
  margin-left: 5px;
`;

function XpDrop(props) {
  const [dropShowing, setDropShowing] = useState(true);
  const curXpDrop = useRef(null);
  const [newXp, setNewXp] = useState(null);

  useEffect(() => {
    if (curXpDrop.current !== null && curXpDrop.current !== undefined) {
      curXpDrop.current.style.transform = "translateY(-300px)";
      setNewXp(props.xp[props.xp.length - 1]);
      setDropShowing(true);
    }
  }, [props.xp]);

  useEffect(() => {
    setTimeout(function () {
      setNewXp(null);
      if (curXpDrop.current !== null) {
        curXpDrop.current.style.transform = "translateY(0)";
      }
    }, 2000);
  }, [newXp]);

  return (
    <React.Fragment>
      <XpDropOuter className={newXp ? "visible" : "hidden"} ref={curXpDrop}>
        <img src="./images/woodcutting.png" alt="" />
        <XpDropXp>{`+${newXp}`}</XpDropXp>
      </XpDropOuter>
    </React.Fragment>
  );
}
export default XpDrop;
