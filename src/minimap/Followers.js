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
  // const [newestFollower, setNewestFollower] = useState(null);
  // const [thanked, setThanked] = useState([]);
  // const [followersToAlert, setFollowersToAlert] = useState([]);
  // const [thanking, setThanking] = useState(null);
  //37402112
  //27871519
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
    const interval = setInterval(() => getFollowers(), 10000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    if(followers.length === 0){ return;}
    // const mostRecentFollower = followers[0].from_name;
    // setNewestFollower(mostRecentFollower);
    // if(thanked === [] ){
    //   setThanked([mostRecentFollower]);
    // }
  }, [followers])

  // useEffect(() => {
  //   if(newestFollower === null){ return;}
  //   let newFollowerArray = [];
  //   for(let fol of followers){
  //     if(thanked.includes(fol.from_name)){
  //       break;
  //     }
  //     newFollowerArray.push(fol.from_name);
  //   }
  //   console.log(newFollowerArray);
  //   setFollowersToAlert(newFollowerArray);
  // }, [newestFollower])


  // useEffect(() => {
  //   if(!followersToAlert.length !== 0){ return;}
  //   const curThanks = followersToAlert[0];
  //   setFollowersToAlert(followersToAlert.filter(item => item !== curThanks));
  //   setThanking(curThanks);
  //   setThanked(...thanked, curThanks);
  // }, [followersToAlert])

  return (
    <div>
      
    </div>
  );
}

export default Followers;

