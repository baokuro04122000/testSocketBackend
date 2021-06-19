let clients = [];
const messageSocket = (io)=>{
    io.on('connection', (socket) => {
        clients.push(socket.id)
        io.emit('allUsers',{clients})
        console.log(clients);
        socket.on('disconnect', () => {
          clients = clients.filter(user=>user !== socket.id)
        })
    })
}
export default messageSocket;