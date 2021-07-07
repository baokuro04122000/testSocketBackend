
import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const onlineOfflineUsers = (io)=>{
    io.on('connection',async (socket) => {
        clients =await pushSocketIdToArray(clients,socket.user._id,socket.id);
        console.log(clients);
        //Emit to user after login of f5 web page
        io.emit("server-send-when-new-device-online",socket.user);
        socket.on('check-status',()=>{
          let listDeviceOnline = Object.keys(clients);
          // Emit to all another users when has f5 web site
          io.emit("server-send-list-device-online",listDeviceOnline);
        });

        socket.on('disconnect', () => {
          delete clients[socket.user._id];
          io.emit("server-send-device-disconnect",socket.user._id);
        })
    })
}
export default onlineOfflineUsers;