import React, {useEffect} from 'react';
import styled from 'styled-components';


function Followers() {
  //request every 60 seconds
  //if data[0] != old data[0]
  //add new followers to the front of the queue with socials
  useEffect(() => {
    fetch("https://api.twitch.tv/helix/users/follows?to_id=27871519", {
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${process.env.REACT_APP_TWITCH_AUTHORIZATION}`,
        "Client-Id": `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
      }
    })
    .then(response => {
      response.json().then(parsedJson => {
        console.log(parsedJson);
      })
    })
    .catch(err => {
      console.error(err);
    });
  
  }, [])

  return (
    <div></div>
  );
}

export default Followers;

