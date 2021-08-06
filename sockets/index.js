import loginMobileSocket from './mobile/loginMobileSocket.js';
import onlineOfflineUsers from "./admin/deviceOnlineOfflineSoket.js";
import messageAndCallSocket from './mobile/messageAndCallSocket.js';
import ChatAppSocket from './mobile/chatAppSocket.js';
import {pushSocketIdToArray, updateStatus} from '../helpers/socketHelper.js';
let clients = {};
const initSockets = (io) =>{ 
    io.on("connection",async (socket)=>{
        clients = await pushSocketIdToArray(clients,socket.user._id,socket.id);
        updateStatus(socket.user._id,true);
        
        loginMobileSocket(io, socket, clients);
        messageAndCallSocket(io, socket, clients);
        onlineOfflineUsers(io,socket, clients);
        ChatAppSocket(io, socket, clients);

        socket.on('disconnect', () => {
            delete clients[socket.user._id];
            updateStatus(socket.user._id,false);
            io.emit("server-send-device-disconnect",socket.user._id);
        })
        
    })
   
}
export default initSockets;