const WebSocket = require("ws");
const ws = new WebSocket.Server({ port: 8081 });

const allMyConnection = [];

ws.on("connection", function connection(wsConnection) {
  allMyConnection.push(wsConnection);

  wsConnection.on("message", function incoming(message) {
    console.log(`server received: ${message}`);
    wsConnection.send("Yes, I got your message");

    allMyConnection.forEach((connection) => {
      connection.send("Hi to Everyone");
    });
  });

  // setInterval(() => wsConnection.send("Hi from the server!"), 1000);
});
