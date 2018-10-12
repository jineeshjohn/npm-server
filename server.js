const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
server.listen(1935, () => {
  console.log('HTTP server listening on port 1935');
});

// Now for the socket.io stuff - NOTE THIS IS A RESTFUL HTTP SERVER
// We are only using socket.io here to respond to the npmStop signal
// To support IPC (Inter Process Communication) AKA RPC (Remote P.C.)

const io = require('socket.io')(server);
io.on('connection', (socketServer) => {
  socketServer.on('npmStop', () => {
    process.exit(0);
  });
});