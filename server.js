const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
      },
});

var players = {};
var sockets = {};

io.on("connection", (socket) => {
    console.log("Socket: ", socket);
    console.log("Socket is active to be connected");
    
    socket.on("chat", (payload) => {
        console.log("Payload: ", payload);
        io.emit("chat", payload); 
    });
});

server.listen(5000, () => {
    console.log("Server is listening at port 5000..."); 
})


