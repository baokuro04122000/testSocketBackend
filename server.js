import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import events from 'events';

import bodyParser from 'body-parser';

import initRoutes from './routers/web.js';
import initSockets from './sockets/index.js';
import connectDB from './config/connectDB.js';
import authSocket from './config/authSocket.js';
import * as configApp from './config/app.js';


const app = express();
app.use(cors());
// set max connection event listeners
events.EventEmitter.setMaxListeners(configApp.app.max_event_listeners);

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin:*');
    res.header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS');
    next();
})

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// init all routes
initRoutes(app);


const httpServer = http.Server(app)
const io = new Server(httpServer,
    {
         cors:{
            origin:"*",
            methods: ["GET", "POST"],
            credentials: true,
            transports: ['websocket', 'polling']
        }
        
    } 
);

// config authenticate through socket
authSocket(io);


//init all sockets
initSockets(io);
httpServer.listen(process.env.PORT, ()=>{
    console.log('server is ready');
})


