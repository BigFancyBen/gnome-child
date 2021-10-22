import React from 'react';
import styled from 'styled-components';
import '../images/rsframe.png';

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 20;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

function Screen() {


  return (
    <ImageWrapper>
      <img src="./images/rsframe.png" alt="" />
    </ImageWrapper>
  );
}

export default Screen;
