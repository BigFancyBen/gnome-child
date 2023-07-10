import React, { useState, useEffect } from "react";
import SocialItem from "./SocialItem";
import Followers from "./Followers";
import {
  MinimapOuter,
  MinimapBackground,
  CarouselWrapper,
} from "./MinimapStyles";

function Minimap() {
  const [index, setIndex] = useState(0);
  const socialLength = 3;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === socialLength - 1 ? 0 : prevIndex + 1
        ),
      10000
    );
  }, [index]);

  return (
    <MinimapOuter>
      <Followers />
      <MinimapBackground />
      <CarouselWrapper style={{ transform: `translateX(${-index * 100}%)` }}>
        <SocialItem cta={"Follow me on TikTok @"} icon={"tiktok"} />
        <SocialItem cta={"Follow me on Youtube @"} icon={"youtube"} />
        <SocialItem cta={""} social=" " icon={"opensauce"} />
      </CarouselWrapper>
    </MinimapOuter>
  );
}

export default Minimap;
