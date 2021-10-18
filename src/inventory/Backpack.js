import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InventoryItem from './InventoryItem';

const BackpackOuter = styled.div`
  position: absolute;
  top: 41vh;
  right: 4.5vw;
  width: 22vw;
  z-index: 6;
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
