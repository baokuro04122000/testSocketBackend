import jwt from 'jwt-then';
import dotenv from 'dotenv';
dotenv.config();
const authSocket = (io) => {
    io.use(async (socket, next) => {
        if(socket.handshake.query.token) {
            try {
              const token = socket.handshake.query.token;
              const payload = await jwt.verify(token, process.env.JWT_SECRET);
              socket.user = payload;
              next();
            } catch (error) {
                return;
            }
        }
    })
}
export default authSocket;