import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

import events from 'events';

import bodyParser from 'body-parser';

import initRoutes from './routers/web.js';
import initSockets from './sockets/index.js';
import connectDB from './config/connectDB.js';
import authSocket from './config/authSocket.js';
import * as configApp from './config/app.js';


const app = express();

// set max connection event listeners
events.EventEmitter.defaultMaxListeners= configApp.app.max_event_listeners


connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
})



// init all routes
initRoutes(app);


const httpServer = http.Server(app)
const io = new Server(httpServer, {cors:{origin:"*"}});

// config authenticate through socket
authSocket(io);


//init all sockets
initSockets(io);
httpServer.listen(process.env.PORT, ()=>{
    console.log('server is ready');
})


