const express = require("express");
const http = require("http");


const app = express();
const server = http.createServer(app).listen(3000);
const io = require("socket.io")(server);


app.use(express.static("./public"));
io.on("connection", (socket) => {
    socket.on("chat", (message) => {
        socket.broadcast.emit("message", message);
    })
    socket.emit("message", "Welcome to Cyber Chat");
});

console.log("Staring Socket App - http://localhost: 3000");