import jwt from 'jwt-then';
import dotenv from 'dotenv';
dotenv.config();
const authSocket = (io) => {
    io.use(async (socket, next) => {
        if(socket.handshake.query.token) {
            try {
              const token = socket.handshake.query.token;
              const payload = await jwt.verify(token, process.env.JWT_SECRET);
              socket.userId = payload._id;
              next();
            } catch (error) {
                console.log(error);
            }
        }
    })
}
export default authSocket;