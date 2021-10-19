import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


function Followers() {
  //request every 60 seconds
  //if data[0] != old data[0]
  //add new followers to the front of the queue with socials
  const [followers, setFollowers] = useState([]);
  const [newestFollower, setNewestFollower] = useState(null);

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
        if(parsedJson.data[0] !== newestFollower) {
          setFollowers(parsedJson.data);
        }
      })
    })
    .catch(err => {
      console.error(err);
    });
  
  }, [])

  useEffect(() => {
    if(followers.length === 0){ return;}
    setNewestFollower(followers[0]);
  }, [followers])

  useEffect(() => {
    if(newestFollower === null){ return;}
    console.log(newestFollower);
  }, [newestFollower])


  return (
    <div></div>
  );
}

export default Followers;

