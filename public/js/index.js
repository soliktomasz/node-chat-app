var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Test',
        text: 'Test Message Created'
    });
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
