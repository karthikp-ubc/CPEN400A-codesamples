// Example of a simple http server written using node.js
// Source: node.js succinctly

var http = require('http');
if (! http) throw { msg: "Cannot find http" };

// Create a simple function to serve a request
var serveRequest = function(request, response) {
	console.log( request.headers );
	response.setHeader("AppId", "hello");
	response.write("Welcome to node.js");
	response.end();	
};

// Start the server on the port and setup response
var port = 8080;
var server = http.createServer(serveRequest);
server.listen(port);
console.log("Starting server on port " + port);

