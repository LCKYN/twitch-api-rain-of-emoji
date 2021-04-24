const tmi = require("tmi.js");
const { client_config } = require("./tmi.config");

const client = new tmi.Client({
  options: { debug: false, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: client_config.username,
    password: client_config.token,
  },
  channels: [client_config.channels],
});

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler(channel, userstate, message, self) {
    if(self) return;

    console.log(userstate);
}

function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}