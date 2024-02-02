import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';

const T3_ROOMS = []
const RPS_ROOMS = []
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
  origin: '*',
}));
app.get('/', (req, res) => {res.send('Server worked')})

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})


io.of('/T3').on('connection', (socket) => {
  socket.emit('all_rooms', {rooms: T3_ROOMS})

  socket.on('create_room', (username) => {
    const id = socket.id
    T3_ROOMS.push({ owner: username, id })
    socket.broadcast.emit('all_rooms', {rooms: T3_ROOMS})
    socket.join(id)
  })

  socket.on('close_room', (id) => {
    const roomIndex = T3_ROOMS.findIndex((room) => room.id === id)
    T3_ROOMS.splice(roomIndex, 1)
    socket.broadcast.emit('all_rooms', {rooms: T3_ROOMS})
  })

  io.on('disconnect', () => {})
})

io.of('/RPS').on('connection', (socket) => {
  socket.emit('all_rooms', {rooms: RPS_ROOMS})

  socket.on('create_room', (username) => {
    const id = socket.id
    RPS_ROOMS.push({ owner: username, id })
    socket.broadcast.emit('all_rooms', {rooms: RPS_ROOMS})
    socket.join(id)
  })

  socket.on('close_room', (id) => {
    const roomIndex = RPS_ROOMS.findIndex((room) => room.id === id)
    RPS_ROOMS.splice(roomIndex, 1)
    socket.broadcast.emit('all_rooms', {rooms: RPS_ROOMS})
  })

  io.on('disconnect', () => {})
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
