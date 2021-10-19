import React from 'react';
import styled from 'styled-components';
import '../images/tiktok.png';
import '../images/youtube.png';

const Outer = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SocialHandle = styled.div`
  font-size: 40px;
  margin-left: 10px;
`;

const CtaWrapper = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  margin-top: -15px;
`;


function SocialItem(props) {



  return (
    <Outer>
      {
        props.cta && <CtaWrapper>
          {props.cta}
        </CtaWrapper>
      }
      <SocialWrapper>
        {props.icon && 
          <img src={`./images/${props.icon}.png`} alt="" srcset="" />
        }
        <SocialHandle>{ props.social ? props.social : "BigFancyBen"}</SocialHandle>
      </SocialWrapper>
    </Outer>  
  );
}

export default SocialItem;
