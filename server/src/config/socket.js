import { Server } from 'socket.io';
let io;
export function initSocket(httpServer){
  io=new Server(httpServer,{cors:{origin:process.env.CLIENT_URL?process.env.CLIENT_URL.split(','):true}});
  io.on('connection',socket=>console.log('Socket connected:',socket.id));
  return io;
}
export function emitLeaderboard(data){ if(io) io.emit('leaderboard:update',data); }
