import loginMobileSocket from './mobile/loginMobileSocket.js';
import onlineOfflineUsers from "./admin/onlineOfflineAdminSoket.js";
import messageAndCallSocket from './mobile/messageAndCallSocket.js';
import ChatAppSocket from './mobile/chatAppSocket.js';
const initSockets = (io) => {
    loginMobileSocket(io);
    messageAndCallSocket(io);
    onlineOfflineUsers(io);
    ChatAppSocket(io);
}
export default initSockets;