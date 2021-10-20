import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const FollowerAlert = styled.div`
  z-index: 9;
  background-color: black;
  color: #fff000;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Followers() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    function getFollowers() {
      fetch("https://api.twitch.tv/helix/users/follows?to_id=37402112", {
        "method": "GET",
        "headers": {
          "Authorization": `Bearer ${process.env.REACT_APP_TWITCH_AUTHORIZATION}`,
          "Client-Id": `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
        }
      })
      .then(response => {
        response.json().then(parsedJson => {
          setFollowers(parsedJson.data);
        })
      })
      .catch(err => {
        console.error(err);
      })
    }
    getFollowers()
    const interval = setInterval(() => getFollowers(), 60000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    if(followers.length === 0){ return;}
    //console.log(followers);
  }, [followers])

  return (
    <div>
      
    </div>
  );
}

export default Followers;