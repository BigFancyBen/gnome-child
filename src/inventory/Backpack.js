import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import InventoryItem from './InventoryItem';

const BackpackOuter = styled.div`
  position: absolute;
  top: 412px;
  right: 66px;
  width: 336px;
  z-index: 21;
  padding: 10px;
`;

const BackpackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function Backpack(props) {
  const [backpackArray, setBackpackArray] = useState([]);

  useEffect(() => {
    if(props.inventory.length === 0){return}
    let invItems = [];
    let curItem = 0;
    for(let i = 0; i<28 ; i++){
      if(props.inventory[curItem]?.index === i){
        invItems.push(<InventoryItem key={`slot-${i}`}id={props.inventory[curItem].id} stackSize={props.inventory[curItem].stackSize} />);
        curItem++;
      } else {
        invItems.push(<InventoryItem key={`slot-${i}`}/>);
      }
    }
    setBackpackArray(invItems);
  }, [props.inventory])

  return (
    <BackpackOuter>
      <BackpackDiv>
        {backpackArray}
      </BackpackDiv>
    </BackpackOuter>
  );
}

export default Backpack;
