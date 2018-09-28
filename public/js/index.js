var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('createEmail', {
        to: 'test2@example.com',
        text: 'Test'
    });

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
