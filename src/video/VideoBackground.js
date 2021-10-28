import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const mainCamId = 'c10b969088528d9e27102e92bbebc63e2a36ae6dc3fff9b483bfc4eb4b296aa0';
const bankCamId = '82f879b5a69b7936664f76b1b0bce3dc9280d882fef34670aec85547dea83689';
const VideoBG = styled.video`
    position: absolute;
    top: 8px;
    left: 5px;
    height: 670px;
    width: 1028px;
    object-fit: cover;
    //transform: scaleX(-1);
    z-index: 1;
`;

const VideoOuter = styled.div`
  &.main{
    .mainCam {
      z-index: 2;
    }
    .bankCam {
      z-index: 1;
    }
  }
  &.bank{
    .mainCam {
      z-index: 1;
    }
    .bankCam {
      z-index: 2;
    }
  }
`;

function VideoBackground(props) {
  const mainConstraints = { video: { width: 1280, height: 720, deviceId: {exact: mainCamId} } };
  const bankConstraints = { video: { width: 1280, height: 720, deviceId: {exact: bankCamId} } };
  const mainCam = useRef(null);
  const bankCam = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(mainConstraints)
    .then(function(mediaStream) {
      let video = mainCam.current;
      video.srcObject = mediaStream;
      video.muted = true;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) { console.log(err.name + ': ' + err.message); });
  }, [mainCam]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(bankConstraints)
    .then(function(mediaStream) {
      let video = bankCam.current;
      video.srcObject = mediaStream;
      video.muted = true;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) { console.log(err.name + ': ' + err.message); });
  }, [bankCam]);


  return (
    <VideoOuter className={props.curCam}>
      <VideoBG className="mainCam" ref={mainCam} />
      <VideoBG className="bankCam" ref={bankCam} />
    </VideoOuter>
  );
}

export default VideoBackground;
