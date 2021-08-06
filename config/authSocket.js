import jwt from 'jwt-then';
import dotenv from 'dotenv';
dotenv.config();
const authSocket = (io) => {
    io.use(async (socket, next) => {
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        if(socket.handshake.auth.token) {
            try {
              const token = socket.handshake.auth.token;
              const payload = await jwt.verify(token, process.env.JWT_SECRET);
              socket.user = payload;
              next();
            } catch (error) {
                console.log(error)
                socket.disconnect(true);
            }
        }else{
            socket.disconnect(true);
        }
    })
}
export default authSocket;