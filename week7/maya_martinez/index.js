const express = require('express'); 
const app = express(); 
const http = require('http'); 
const server = http.createServer(app);
const io = require('socket.io')(httpServer, { 
    path: "/socket.io/" }); 

const {Server} = require("socket.io"); 
 
const Schema = mongoose.Schema; 

const messageSchema = new Schema ({
    content: {type: String }
})

const messageModel = mongoose.model('Message', messageSchema)
const silence = new messageModel({name : 'Silence'}); 
const fluff = new messageModel({name: 'fluff'}); 

await silence.save() 
await fluff.save() 

app.get('/', function(req, res) { 
    res.sendFile(_dirname + '/index.html');
}); 

io.on('connection', (socket) => {
    console.log('a user connected'); 
    
    socket.on('chat message', function(msg) { 
        const message = new messageModel();
        message.content = msg; 
        message.save().then(m => {
            io.emit('chat message', msg); 
        }) 
    });  
}); 

server.listen(3000, async function() { 
    await mongoose.connect ('mongodb+srv://mayam03:<db_password>@cluster0.5l1vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('listening on *:3000');
});

