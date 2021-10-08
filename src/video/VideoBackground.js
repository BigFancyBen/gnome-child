import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoBG = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    transform: scaleX(-1);
    z-index: 1;
`;

function VideoBackground() {
  const constraints = { audio: true, video: { width: 1280, height: 720 } };
  const videoEl = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      let video = videoEl.current;
      video.srcObject = mediaStream;
      video.muted = true;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) { console.log(err.name + ': ' + err.message); });
  }, [videoEl]);


  return (
    <VideoBG ref={videoEl} />
  );
}

export default VideoBackground;
