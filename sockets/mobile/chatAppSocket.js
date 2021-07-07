import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const ChatAppSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.user._id,socket.id);

        socket.on('req-chat-text',({senderId,receiverId,text})=>{
            io.to(`${clients[receiverId]}`).emit('res-chat-text',{senderId,text});
        })
    
        socket.on('disconnect', () => {
          delete clients[socket.user._id];
        })
    })
}
export default ChatAppSocket;