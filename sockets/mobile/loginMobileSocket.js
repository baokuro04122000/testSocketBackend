import {userMB} from '../../controllers/index.js';
import {pushSocketIdToArray, removeSocketIdFromArray} from '../../helpers/socketHelper.js';

let clients = {};

const loginSocket = (io)=>{
    io.on('connection',async (socket) => {
        clients = await pushSocketIdToArray(clients,socket.userId,socket.id);
        console.log(clients);
        io.emit('test-socket-req-res',{clients});
        io.to(`${clients['error']}`).emit('auth-faild',{error:'token is expried'})
            socket.on("mobile-req-register",async (data)=>{
                io.emit('socket-of-ky',{data});
                try {
                    const {status, message, data} = await  userMB.userRegisterMB({
                            username:data.username,
                            password:data.password,
                            deviceId:data.deviceId
                    })
                    io.to(`${socket.id}`).emit('server-res-register-to-MB',{status,message,data})
                } catch ({status,message}) {
                    io.to(`${socket.id}`).emit('server-res-register-to-MB',{status,message,data:{}})
                }
            })
            socket.on('mobile-req-login',async (data)=>{
                try {
                   const {status, message, data} =await userMB.userLoginMB({
                       username:data.username,
                       password:data.password
                   })
                io.to(`${socket.id}`).emit('server-res-login-to-MB',{status,message,data})
               } catch ({status, message}) {
                io.to(`${socket.id}`).emit('server-res-login-fail-to-MB',{status,message,data:{}})
               }
            })
        socket.on('disconnect', () => {
          delete clients[socket.userId];
        })
    })
}
export default loginSocket;