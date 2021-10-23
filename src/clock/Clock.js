import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const ClockDiv = styled.div`
  position: absolute;
  bottom: 5px;
  left: 57vw;
  z-index: 55;
  width: 157px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockTime = styled.div`
  font-family: 'Runescape Chat';
  font-size: 24px;
  color: white;
  margin-bottom: -6px;
  text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
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
      <ClockTime>{date.toLocaleTimeString()}</ClockTime>
    </ClockDiv>
  );
}
export default Clock;