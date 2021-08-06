import UserModel from '../models/userModel.js';
export let pushSocketIdToArray = (clients,userId,socketId) => {
   return new Promise((resolve)=>{
      clients[userId] = [socketId];
      resolve(clients);
   })
};
  
  export let emitNotifyToArray = (clients,userId,io,eventName,data) => {
    if (clients[userId]) {
      clients[userId].forEach(socketId => {
        io.sockets.connected[socketId].emit(eventName, data);
      })
    }
  } ;
  
  export let removeSocketIdFromArray = (clients , userId , socketID) => {
    return new Promise((resolve)=>{
        if(clients[userId]){
            clients[userId] = clients[userId].filter(socketId=>socketId !== socketID
            );
            if (clients[userId].length) {
              delete clients[userId];
            }
        }
        resolve(clients);
    })
  };

  export let updateStatus =async (deviceId,status) => {
    try {
      await UserModel.updateStatusById(deviceId,status);
    } catch (error) {
      console.log(error);
    }
  }