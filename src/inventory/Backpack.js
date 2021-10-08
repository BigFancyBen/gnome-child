import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InventoryItem from './InventoryItem';

const BackpackOuter = styled.div`
  height: 450px;
  position: absolute;
  bottom: 30px;
  right: 30px;

  width: 300px;
  background-color: rgba(0,0,0,0.5);

  border: black 5px solid;
  border-radius: 15px;
  z-index: 2;
  padding: 10px;
`;

const BackpackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function Backpack() {

  return (
    <BackpackOuter>
      <BackpackDiv>
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
      </BackpackDiv>
    </BackpackOuter>
  );
}

export default Backpack;
