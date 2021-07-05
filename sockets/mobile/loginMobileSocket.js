import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const loginSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.userId,socket.id);
        io.emit('test-socket-req-res',{clients});
            
        socket.on('disconnect', () => {
          delete clients[socket.userId];
          io.emit('test-socket-req-res',{clients});
        })
    })
}
export default loginSocket;