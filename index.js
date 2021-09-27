const {createServer} = require('http');

const express = require('express');
const a = require('./db');
const app = express();
const {Server} = require('socket.io');

const server = createServer(app);
const io = new Server(server,{});


io.on("connection",(Socket)=>{
    Socket.on("moodi",(data)=>{
        io.emit("moodi",data)
        let kkk = {
            name:data.name,
            meeseage:data.meeseage,
        }
        // a(kkk)
    })
})

app.use(express.static("Public"))


const port = 3000
server.listen(port, () => console.log(`Example app listening on port port!`))