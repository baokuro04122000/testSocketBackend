import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const ChatAppSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.userId,socket.id);
 
        socket.on('admin-send-text-to-server',({adminId,deviceId,text})=>{
            io.to(`${clients[deviceId]}`).emit('server-send-text-from-admin',{adminId,text});
        })
    
        socket.on('disconnect', () => {
          delete clients[socket.userId];
        })
    })
}
export default ChatAppSocket;