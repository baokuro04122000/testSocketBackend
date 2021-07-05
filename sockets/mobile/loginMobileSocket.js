import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const loginSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.userId,socket.id);
        console.log(clients);
        io.emit('test-socket-req-res',{clients});
           
            
        socket.on('disconnect', () => {
          delete clients[socket.userId];
          io.emit('test-socket-req-res',{clients});
        })
    })
}
export default loginSocket;