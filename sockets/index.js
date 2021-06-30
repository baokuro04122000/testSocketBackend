import loginMobileSocket from './mobile/loginMobileSocket.js';
import onlineOfflineUsers from "./admin/onlineOfflineAdminSoket.js";
import messageAndCallSocket from './mobile/messageAndCallSocket.js'
const initSockets = (io) => {
    loginMobileSocket(io);
    messageAndCallSocket(io);
    onlineOfflineUsers(io);
}
export default initSockets