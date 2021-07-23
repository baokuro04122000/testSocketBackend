import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const loginSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.user._id,socket.id);
        io.emit('test-socket-req-res',{clients});
            
        socket.on('disconnect', () => {
          delete clients[socket.user._id];
          io.emit('test-socket-req-res',{clients});
        })
    })
}
export default loginSocket;