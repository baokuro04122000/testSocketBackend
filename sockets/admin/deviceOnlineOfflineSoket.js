
import {pushSocketIdToArray} from '../../helpers/socketHelper.js';

let clients = {};

const onlineOfflineDevices = (io)=>{
    io.on('connection',async (socket) => {
        clients =await pushSocketIdToArray(clients,socket.userId,socket.id);
        
        socket.on('disconnect', () => {
          clients = removeSocketIdFromArray(clients, socket.userId, socket.id);
        })
    })
}
export default onlineOfflineDevices;