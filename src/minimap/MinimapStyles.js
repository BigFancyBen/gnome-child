import styled, { keyframes } from 'styled-components';

const gradientRotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const MinimapOuter = styled.div`
  color: #fff000;
  position: absolute;
  top: 1.9vh;
  right: 10vh;
  width: 28.6vh;
  height: 30vh;
  overflow: hidden;
`;

export const MinimapBackground = styled.div`
  position: absolute;
  top:-10%;
  left:-10%;
  height: 115%;
  width: 115%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  animation-duration: 20s;
  animation-name: ${gradientRotate};
  animation-iteration-count: infinite;
  z-index: 4;
  transform: rotate(0deg);
`;

export const CarouselWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: transform 1s ease-in-out;
  z-index: 6;
`;