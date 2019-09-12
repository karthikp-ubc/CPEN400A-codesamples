var http = require('http');

var serverCount = 4;

var loadBalance = function(request, response) {
	// TODO:
	// Send each request to one of the 4 servers
	// And send back the result to the client
}

var port = 8079;

var server = http.createServer(loadBalance);
server.listen(port);
console.log("Starting server on port " + port);