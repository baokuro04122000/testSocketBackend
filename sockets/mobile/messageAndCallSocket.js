import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const messageAndCallSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.user._id,socket.id);
        // received data from admin
        socket.on("admin-send-action-to-server",async ({adminId,deviceId,assignmentId,actions,contacts,content})=>{
            // send the request to the device
            io.to(`${clients[deviceId]}`).emit('server-req-send-action-to-MB',{adminId,assignmentId,actions,contacts,content});          
        })
        socket.on("MB-res-action-status-to-server",({assignmentId,contactId,adminId,status})=>{
            io.to(`${clients[adminId]}`).emit("server-res-action-status-to-admin",{assignmentId,contactId,status});
        })
        socket.on('disconnect',() => {
          delete clients[socket.user._id];
        })
    })
}
export default messageAndCallSocket;