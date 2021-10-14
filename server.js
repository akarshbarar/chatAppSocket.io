const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
//Initializing Socket server
const io = require("socket.io")(server);

app.use(express.json());

server.listen(3000,"0.0.0.0", ()=>{
    console.log(` SERVER RUNNING AT 3000`)
    
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
