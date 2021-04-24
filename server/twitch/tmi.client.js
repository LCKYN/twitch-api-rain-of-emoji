// const { client_config } = require("./tmi.config");

// exports.onConnectedHandler = tmi => {
//   return new tmi.Client({
//     options: { debug: false, messagesLogLevel: "info" },
//     connection: {
//       reconnect: true,
//       secure: true,
//     },
//     identity: {
//       username: client_config.username,
//       password: client_config.token,
//     },
//     channels: [client_config.channels],
//   });
// };
