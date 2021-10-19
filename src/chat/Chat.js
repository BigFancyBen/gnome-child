import React from 'react';
import styled from 'styled-components';
const tmi = require('react-tmi');

const ChatName = styled.div`
  position: absolute;
  bottom: 0;
  left: 32px;
  font-family: 'Runescape Chat';
  font-size: 29px;
`;

const ChatWrapper = styled.div`
  position: absolute;
  bottom: 58px;
  left: 15px;
  z-index: 60;
  width: 66vw;
  height: 25.6vh;
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-family: 'Runescape Chat';
  font-size: 29px;
  height: calc(100% - 40px);
  margin-left: 10px;
`;

const Chatter = styled.div`
  color: black;
`;

const ChatterMessage = styled.div`
  color: #002783;
`;

function Chat() {
  const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
      reconnect: true,
      secure: true
    },
    identity: {
      username: 'bigfancybot',
      password: `${process.env.REACT_APP_TWITCH_CHAT_OAUTH}`
    },
    channels: [ 'bigfancyben' ]
  });
  client.connect().catch(console.error);
  client.on('message', (channel, tags, message, self) => {
    if(self) return;
    if(message.toLowerCase() === '!hello') {
      client.say(channel, `@${tags.username}, heya!`);
    }
  });
      

  return (
    <ChatWrapper>
      <ChatMessage><Chatter>BigFancyBen: </Chatter><ChatterMessage>buying gf</ChatterMessage></ChatMessage>
      <ChatName>BigFancyBen</ChatName>
    </ChatWrapper>
  );
}

export default Chat;
