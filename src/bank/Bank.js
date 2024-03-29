import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../images/bank.png";
import InventoryItem from "../inventory/InventoryItem";

const BankOuter = styled.div`
  position: absolute;
  height: 670px;
  width: 1027px;
  z-index: 99;
  top: 7px;
  left: 7px;
  background-image: url("./images/bank.png");

  .bankItem {
    height: 65px;
    width: 65px;
    padding-top: 0;
    position: absolute;
    margin: 0;
    filter: blur(1px);
  }
  .bankItem:nth-child(1) {
    left: 700px;
    top: 300px;
  }
  .bankItem:nth-child(2) {
    left: 793px;
    top: 300px;
  }
`;

function Bank(props) {
  const [bankShowing, setBankShowing] = useState(false);
  const curBank = useRef(null);

  useEffect(() => {
    if (bankShowing === false) {
      return false;
    }
    curBank.current.style.display = "flex";
    setTimeout(function () {
      setBankShowing(false);
    }, 5000);
  }, [bankShowing]);

  useEffect(() => {
    console.log(props.bankedLoot);
    if (props?.bankedLoot?.length > 0) {
      setBankShowing(true);
    }
  }, [props.bankedLoot]);

  return (
    <React.Fragment>
      {bankShowing && (
        <BankOuter ref={curBank}>
          {props.bankedLoot.map((item, index) => (
            <InventoryItem
              key={index}
              id={item.id}
              stackSize={item.stackSize}
              source={"bankItem"}
            />
          ))}
        </BankOuter>
      )}
    </React.Fragment>
  );
}
export default Bank;
