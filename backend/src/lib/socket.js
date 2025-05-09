import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  }
});

// helper function
export function getReceiverSocketId(userId) {
  return userSocketMap[userId]
}

// used to store online users
const userSocketMap = {};
// listening for any incoming connections
io.on("connection", (socket) => {
  console.log("Socket connection connected", socket.id);

  const userId = socket.handshake.query.userId;
  if(userId) userSocketMap[userId] = socket.id;

  // broadcast
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // listening for disconnection
  socket.on("disconnect", () => {
    console.log("Socket disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  })
})

export {io, app, server};