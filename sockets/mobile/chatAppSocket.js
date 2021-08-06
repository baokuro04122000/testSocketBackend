
const ChatAppSocket = (io,socket, clients)=>{
        socket.on('req-chat-text',({senderId,receiverId,text})=>{
            io.to(`${clients[receiverId]}`).emit('res-chat-text',{senderId,text});
        })
}
export default ChatAppSocket;