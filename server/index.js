const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let buttonActive = false;

io.on('connection', socket => {
  socket.emit('set-state', buttonActive);

  socket.on('toggle-state', () => {
    buttonActive = !buttonActive;
    io.emit('set-state', buttonActive);
  });

  socket.on('disconnect', () => {
    if (!io.of('/').sockets.size) buttonActive = false;
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'));
  });
}

server.listen(process.env.PORT || 5000);
