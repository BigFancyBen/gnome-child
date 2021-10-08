import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const api = "https://api.osrsbox.com/items/";

const InventItem = styled.div`
  width: 25%;
  padding-top: 25%;
  height: 0;
  position: relative;

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
  text-shadow: 2px 2px 2px #000;
  z-index: 4;
  font-family: 'Runescape';
  font-size: 20px;
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
          tempItem.count = Math.floor(Math.random() * 1000);
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
    console.log(item);
  }, [item])

  return (
    <InventItem>
      {item && <ItemCount>{item.count}</ItemCount> }
      {item && <img src={`data:image/png;base64,${item.icon}`} alt="" />}
    </InventItem>
  );
}

export default InventoryItem;