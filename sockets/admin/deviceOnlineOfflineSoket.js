
import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const onlineOfflineUsers = (io)=>{
    io.on('connection',async (socket) => {
        clients =await pushSocketIdToArray(clients,socket.userId,socket.id);
        console.log(clients);
        io.emit("server-send-when-new-device-online",socket.userId);
        socket.on('check-status',()=>{
          let listDeviceOnline = Object.keys(clients);
          //Emit to user after login of f5 web page
          io.emit("server-send-list-device-online",listDeviceOnline);
          // Emit to all another users when has f5 web site
        });

        socket.on('disconnect', () => {
          delete clients[socket.userId];
          io.emit("server-send-device-disconnect",socket.userId);
        })
    })
}
export default onlineOfflineUsers;