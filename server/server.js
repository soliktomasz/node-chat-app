import { join } from 'path';
import { createServer } from 'http';
import express, { static } from 'express';
import socketIO from 'socket.io';

import { generateMessage, generateLocationMessage } from './utils/message';
const publicPath = join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = createServer(app);
var io = socketIO(server);

app.use(static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
