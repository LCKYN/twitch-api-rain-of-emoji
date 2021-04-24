module.exports = (tmi) => {
  const { client_config } = require("./tmi.config");

  const client = tmi.Client({
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

  const event = require("./tmi.event");

  client.on("message", event.onMessageHandler);
  client.on("connected", event.onConnectedHandler);
  client.connect();
};
