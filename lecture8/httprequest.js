// http server demonstrating the use of streams within serveRequest

var http = require('http');
if (! http) throw { msg: "Cannot find http" };

// Create a simple function to serve a request
var serveRequest = function(request, response) {
	console.log("Calling serveRequest : " + request.url );
	request.on("end", function() {
		console.log("Request ended");
		response.write("Ok");
		response.end();	
	});
};

// Start the server on the port and setup response
var port = 8080;
var server = http.createServer(serveRequest);
server.listen(port);
