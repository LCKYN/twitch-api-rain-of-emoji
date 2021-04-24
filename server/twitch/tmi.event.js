exports.onMessageHandler = (channel, userstate, message, self) => {
  if (self) return;

  console.log(userstate);
};

exports.onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
};
