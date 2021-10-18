import React from 'react';
import styled from 'styled-components';
import SocialItem from './SocialItem';
import Followers from './Followers';

const MinimapOuter = styled.div`
    color: #fff000;
    position: absolute;
    top: 1.9vh;
    right: 10vh;
    width: 28.6vh;
    background-color: black;
    height: 30vh;
`;


function Minimap() {
  return (
    <MinimapOuter>
      <Followers />
      <SocialItem cta={"Folow me on TikTok @"} icon={"tiktok"} />
      <SocialItem cta={"Folow me on Youtube @"} icon={"youtube"} />
      <SocialItem cta={"Yellow Text"} social={"Black Background"} />
    </MinimapOuter>
  );
}

export default Minimap;
