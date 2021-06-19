import messageSocket from "./message.js";

const initSockets = (io) => {
    messageSocket(io)
  }
export default initSockets