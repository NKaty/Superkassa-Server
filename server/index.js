const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let buttonActive = false;

io.on('connection', socket => {
  // restores the state of the button after a temporary disconnection
  socket.emit('set-state', buttonActive);

  // notifies all the sockets of a button state change
  // including the socket that have changed the button state
  socket.on('toggle-state', () => {
    buttonActive = !buttonActive;
    io.emit('set-state', buttonActive);
  });

  // noifies a newly connected socket of the button state
  socket.on('new-connection', () => {
    socket.emit('set-state', buttonActive);
  });

  // If all the sockets are disconnected,
  // restores the inital state of the button
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
