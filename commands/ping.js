module.exports = {
    name: 'ping',
    description: 'Test Command.',
    execute(message) {
      message.channel.send("Pong "+ message.channel.client.ws.ping+" ms !");
    }
  };