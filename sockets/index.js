import loginMobileSocket from './mobile/loginMobileSocket.js';
import onlineOfflineDevices from "./admin/deviceOnlineOfflineSoket.js";
import messageAndCallSocket from './mobile/messageAndCallSocket.js';
import ChatAppSocket from './mobile/chatAppSocket.js';
const initSockets = (io) => {
    loginMobileSocket(io);
    messageAndCallSocket(io);
    onlineOfflineDevices(io);
    ChatAppSocket(io);
}
export default initSockets;