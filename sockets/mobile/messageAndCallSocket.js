import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const messageAndCallSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.userId,socket.id);
        // received data from admin
        socket.on("admin-send-action-to-server",async ({adminId,deviceId,actions,contacts,context})=>{
            // send the request to the device
            io.to(`${clients[deviceId]}`).emit('server-req-send-action-to-MB',{adminId,deviceId,actions,contacts,context});          
        })
        socket.on("MB-res-action-to-server",({adminId,status})=>{
            io.to(`${clients[adminId]}`).emit('server-res-status-action-to-admin',{status});
        })
        
        socket.on('disconnect',() => {
          delete clients[socket.userId];
        })
    })
}
export default messageAndCallSocket;