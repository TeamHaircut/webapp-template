const socket = io('http://teamhaircut.org:5000', {
	'reconnection': true,
	'reconnectionDelay': 50,
	'maxReconnectionAttempts': Infinity
});

socket.emit('joinRoom');

socket.on('reconnecting', () => {
		socket.emit('rejoinRoom');
});