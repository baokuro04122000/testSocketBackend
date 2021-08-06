
const loginSocket = (io, socket, clients)=>{
 
  
        io.emit('test-socket-req-res',{clients});
 
}
export default loginSocket;