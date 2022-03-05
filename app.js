const express = require('express')
const app = express()

const http =require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) =>{
    //console.log('Un usario se ha conectado')
    /*socket.on('disconnet',()=>{
        console.log('un usario se ha desconcetado')
    })*/
   /* socket.on('chat', (msg)=>{
        console.log('mensaje:' +msg)
    })*/
    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })
})


app.get('/', (req, res)=>{
    //res.send('<h1>Aplicacion de chat</h1>')
    //console.log(__dirname)
    res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000')
})