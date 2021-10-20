import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const ClockDiv = styled.div`
  position: absolute;
  bottom: 6px;
  left: 58.5vw;
  font-family: 'Runescape Chat';
  font-size: 29px;
  color: white;
  text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
    z-index: 55;
`;

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <ClockDiv>
      {date.toLocaleTimeString()}
    </ClockDiv>
  );
}
export default Clock;