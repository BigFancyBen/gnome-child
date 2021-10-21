import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const api = "https://api.osrsbox.com/items/";

const InventItem = styled.div`
  width: calc( 25% - 18px );
  padding-top: calc( 25% - 18px );
  height: 0;
  position: relative;
  margin: 9px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

//todo add gooby font
const ItemCount = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff000;
  /* text-shadow: 2px 2px 2px #000, 1px 1px 1px #000; */
  text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
  z-index: 21;
  font-family: 'Runescape Chat';
  font-size: 25px;
`;

function InventoryItem() {
  const [item, setItem] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${api}${Math.floor(Math.random() * 1000)}`)
      .then(res => res.json())
      .then(
        (result) => {
          let tempItem = {};
          tempItem.icon = result.icon;
          tempItem.name = result.name;
          const x = (Math.floor(Math.random() * 2) === 0);
          if(x){
            tempItem.count = Math.floor(Math.random() * 1000);
          } else {
            tempItem.count = 1;
          }
          setItem(tempItem);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  }, [])

  useEffect(() => {
    if(error !== null){
      console.log(error);
    }
  }, [error])

  return (
    <InventItem>
      {item && item.count > 1 && <ItemCount>{item.count}</ItemCount> }
      {item && item.icon && <img src={`data:image/png;base64,${item.icon}`} alt="" />}
    </InventItem>
  );
}

export default InventoryItem;