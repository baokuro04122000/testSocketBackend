


const onlineOfflineUsers = (io, socket, clients)=>{
  
 
        //Emit to user after login of f5 web page
        io.emit("server-send-when-new-device-online",socket.user);
        socket.on('check-status',()=>{
          let listDeviceOnline = Object.keys(clients);
          // Emit to all another users when has f5 web site
          io.emit("server-send-list-device-online",listDeviceOnline);
        });


}
export default onlineOfflineUsers;