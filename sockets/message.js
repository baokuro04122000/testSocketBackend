let clients = [];
const messageSocket = (io)=>{
    io.on('connection', (socket) => {
        clients.push(socket.id)
        io.emit('allUsers',{clients})
        socket.on('disconnect', () => {
          clients = clients.filter(user=>user !== socket.id)
        })
    })
}
export default messageSocket;