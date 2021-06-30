
import {pushSocketIdToArray, removeSocketIdFromArray} from '../../helpers/socketHelper.js';

let clients = {};

const onlineOfflineUsers = (io)=>{
    io.on('connection', (socket) => {
        clients = pushSocketIdToArray(clients,socket.userId,socket.id);
        
        socket.on('disconnect', () => {
          clients = removeSocketIdFromArray(clients, socket.userId, socket.id);
        })
    })
}
export default onlineOfflineUsers;