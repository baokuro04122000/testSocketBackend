import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import initSockets from './sockets/index.js';

const app =new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// config socket.io
app.get('/',(req,res)=>{
    res.send("hello world")
})
const httpServer = http.Server(app)
const io = new Server(httpServer, {cors:{origin:"*"}});
initSockets(io);
httpServer.listen(process.env.PORT ?? 8000, ()=>{
    console.log('server is ready');
})

