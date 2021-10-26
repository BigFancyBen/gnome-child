import styled from 'styled-components';

export const MinimapOuter = styled.div`
  color: #222;
  position: absolute;
  top: 19px;
  right: 95px;
  width: 300px;
  height: 305px;
  overflow: hidden;
`;

export const MinimapBackground = styled.div`
  position: absolute;
  top:-10%;
  left:-10%;
  height: 115%;
  width: 115%;
  background-image: url('./images/woodcuttingLevel.png');
  background-size: 500px 343px;;
  background-position: 80% 50%;
  z-index: 4;
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