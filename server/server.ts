// import { app } from "./app";
// import connectDB from "./utils/ds";
// import { v2 as cloudinary } from 'cloudinary';
// import http from 'http';
// import { Server } from 'socket.io';

// require("dotenv").config();

// // Cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_SECRET_KEY
// });

// // Create an HTTP server and bind Socket.io to it
// const server = http.createServer(app);
// const io = new Server(server);
// export {io}

// // Handle Socket.io connections
// io.on('connection', (socket) => {
//     console.log('A user connected');
  
//     socket.on("userLoggedIn", (data) => {
//       io.emit("updateDevices", data);  // Emit to all clients
//     });
    
//     socket.on("logoutFromAll", (userId) => {
//       console.log(`🚪 Logging out user: ${userId}`);
//       io.to(`user-${userId}`).emit(`logout-${userId}`);
//       io.in(`user-${userId}`).socketsLeave(`user-${userId}`);
//     });
  
//     // Handle disconnections
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

// // Start the server
// server.listen(process.env.PORT, () => {
//   console.log(`Server is connected with port ${process.env.PORT}`);
//   connectDB();
//   console.log('DB connected');
// });

import { app } from "./app";
import connectDB from "./utils/ds";
import { v2 as cloudinary } from "cloudinary";
import http from "http";
import { Server } from "socket.io";
import './utils/sessionCleanup'


require("dotenv").config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Create an HTTP server and attach Socket.io
const server = http.createServer(app);
const io = new Server(server);

export { io };

// Handle Socket.io connections

io.on("connection", (socket) => {
 
  socket.on("userLoggedIn", (userId) => {
    socket.join(`user-${userId}`);
    io.to(`user-${userId}`).emit("updateDevices", { userId });
  });

  socket.on("logoutFromAll", (userId) => {

    io.emit("logoutAllDevices", { userId });
  });

  socket.on("logoutSpecificDevice", ({ sessionKey }) => {

  })
  socket.on('notification',(data)=>{
    io.emit("newNotification",data)
  })
  socket.on("disconnect", () => {

  });
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
  connectDB();
  console.log("✅ Database connected");
});
