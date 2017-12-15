var net = require('net');
var fs = require('fs');
var http = require('http');

var server = net.createServer(function(socket) {
	socket.write('Hello Client!\r\n');
	socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');

var webserver= http.createServer(function(request, response) {
	console.log('A request was made: ' + request.url);
	response.writeHead(200, {'Content-type':'text/html'});
	var read = fs.createReadStream(__dirname + '/home.template.html', 'utf8');
	read.pipe(response);
});

webserver.listen(8081, '127.0.0.1');
