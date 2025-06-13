import { Socket } from "dgram";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
const io = new Server(server);
const port = 9000;

//socket.io
io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
        io.emit('sentToAll',message)
    });
});
 
app.get('/home',(req,res)=>{
    return res.send({
        status:200,
        message:"hello world",
     });
    })

server.listen(port, ()=> console.log(`server is listening at port no :${port}`));
