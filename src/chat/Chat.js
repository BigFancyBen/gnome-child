import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "bad-words";

const tmi = require("react-tmi");

const ChatName = styled.div`
  position: absolute;
  bottom: 2px;
  left: 32px;
  font-family: "Runescape Chat";
  font-size: 29px;
`;

const ChatWrapper = styled.div`
  position: absolute;
  bottom: 58px;
  left: 15px;
  z-index: 60;
  width: 1011px;
  display: flex;
  height: 225px;
  padding-bottom: 36px;
  align-items: flex-start;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Runescape Chat";
  font-size: 29px;
  margin: -1px 10px;
  height: fit-content;
  text-align: left;
  white-space: nowrap;
`;

const Chatter = styled.div`
  color: black;
`;

const ChatterMessage = styled.div`
  color: #0000ff;
  margin-left: 5px;
`;

function Chat() {
  const [chatMessages, setChatMessages] = useState([]);
  const filter = new Filter();

  useEffect(() => {
    const client = new tmi.Client({
      options: { debug: true, messagesLogLevel: "info" },
      connection: {
        reconnect: true,
        secure: true,
      },
      identity: {
        username: "bigfancybot",
        password: `${process.env.REACT_APP_TWITCH_CHAT_OAUTH}`,
      },
      channels: ["bigfancyben"],
    });
    client.connect().catch(console.error);
    client.on("message", (channel, tags, message, self) => {
      if (self) return;
      if (message.toLowerCase() === "!hello") {
        //todo chat bot commands maybe?
        client.say(channel, `@${tags.username}, heya!`);
      } else {
        console.log(tags);
        const newChat = { username: tags["display-name"], message: message };
        setChatMessages((chatMessages) => [newChat, ...chatMessages]);
      }
    });
  }, []);

  useEffect(() => {
    //console.log(chatMessages);
  }, [chatMessages]);

  return (
    <ChatWrapper>
      {chatMessages.slice(0, 8).map((chat) => (
        <ChatMessage>
          <Chatter>{chat.username}: </Chatter>
          <ChatterMessage>
            {filter.clean(chat.message.slice(0, 80))}
          </ChatterMessage>
        </ChatMessage>
      ))}
      <ChatName>BigFancyBen</ChatName>
    </ChatWrapper>
  );
}
export default Chat;
