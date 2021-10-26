npm i

npm run dev

not gonna work without 

```
REACT_APP_TWITCH_AUTHORIZATION=
REACT_APP_TWITCH_CLIENT_ID=
REACT_APP_TWITCH_CHAT_OAUTH=
```


Generated the other one with some command line tool

I used https://twitchapps.com/tmi/ to get the chat oauth token

Cam won't work in obs unless launched with the arguments
`./obs64.exe --enable-gpu --enable-media-stream`

point obs at localhost:3030

The api I'm using is an [oracle machine](https://en.wikipedia.org/wiki/Oracle_machine)