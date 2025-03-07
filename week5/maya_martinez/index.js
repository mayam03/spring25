const express = require('express'); 
const app = express(); 
const http = require('http'); 
const server = http.createServer(app);
 
app.get('/', (req, res) => { 
    res.sendFile(_dirname + '/index.html');
}); 

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => { 
    console.log('listening on *:3000')
}); 