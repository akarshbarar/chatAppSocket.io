const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
//Initializing Socket server
const { Server } = require("socket.io");
const io = new Server(server);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/",(req, res)=>{
     res.sendFile(__dirname + '/index.html');
});

server.listen(3000, ()=>{
    console.log(` SERVER RUNNING AT 3000`)
    
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
//   console.log(socket)//Try to play with this socket

    socket.on("SENDER_NUMBER__RECIVER_NUMBER", (msg)=>{
        io.emit('SENDER_NUMBER__RECIVER_NUMBER', msg);
    });
});
