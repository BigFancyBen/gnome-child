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
  transition: opacity 1s ease-in-out;
  flex-direction: column;
  font-family: 'Runescape NPC Chat';

  .thanks{
    margin: 0 20px 10px 20px;
    color: #002783;
    font-size: 40px;
  }
  .thanks-name {
    color: black;
    font-size: 50px;
    margin: 0 20px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: -20px;
`;


function followAlertsToString(peopleToThank){
  let people = "";
  if(peopleToThank.length === 1){
    return peopleToThank[0];
  }
  if(peopleToThank.length === 2){
    people = `${peopleToThank[0]} and ${peopleToThank[1]}`;
  }
  if(peopleToThank.length > 2){
    people = `${peopleToThank.slice(0, -1).join(", ")}, and ${peopleToThank[peopleToThank.length-1]}`;
  }
  return people;
}

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [newFollows, setNewFollows] = useState([]);
  const [followAlerts, setFollowAlerts] = useState([]);

  useEffect(() => {
    function getFollowers() {
      fetch("https://api.twitch.tv/helix/users/follows?to_id=27871519", {
        "method": "GET",
        "headers": {
          "Authorization": `Bearer ${process.env.REACT_APP_TWITCH_AUTHORIZATION}`,
          "Client-Id": `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
        }
      })
      .then(response => {
        response.json().then(parsedJson => {
          setNewFollows(parsedJson.data);
        })
      })
      .catch(err => {
        console.error(err);
      })
    }
    getFollowers()
    const interval = setInterval(() => getFollowers(), 30000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    if(newFollows.length === 0){ return;}
    let temp = [...followers, ...newFollows];
    temp = temp.filter((v,i,a)=>a.findIndex(t=>(t.from_name === v.from_name))===i);
    if(followers.length){
      setFollowAlerts(temp.slice(followers.length).map(f => f.from_name));
    }
    setFollowers(temp);
  }, [newFollows])

  useEffect(() => {
    if(followAlerts.length === 0){ return;}
    setTimeout(
      function() {
        setFollowAlerts([]);
      }, 5000);
  }, [followAlerts])

  return (
    <div>
      <FollowerAlert style={{opacity: followAlerts.length > 0 ? 1 : 0}}>
        {followAlerts.length > 0 && <MessageWrapper>
          <p className="thanks">Thanks for following!</p><p className="thanks-name">{`${followAlertsToString(followAlerts)}`}</p>
        </MessageWrapper>}
      </FollowerAlert>
    </div>
  );
}

export default Followers;