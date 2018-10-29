// Example of a simple http server written using node.js
// Source: node.js succinctly

var http = require('http');
if (! http) throw { msg: "Cannot find http" };

// Create a simple function to serve a request
var serveRequest = function(request, response) {
	console.log("Received request");	
	response.write("Received: " + request.url);
	response.end();	
};

// Start the server on the port and setup response
var port = 8080;
var server = http.createServer();
console.log("Starting server on port " + port);
server.on("request", serveRequest);
server.listen(port);

