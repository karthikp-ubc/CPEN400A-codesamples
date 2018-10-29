// This is the server corresponding to the AJAX client we developed earlier

var http = require("http");
if (! http) process.exit(1);

var fs = require("fs");
if (! fs) process.exit(2);

var path="./client";
var counts = {};	// Number of requests from each address

var serveRequest = function(request, response) {
	if ( request.url.startsWith("/hello") ) {
		// If it's an AJAX request, return world
		console.log( "Received " + request.url );
		var addr = request.connection.remoteAddress;
		if (addr in counts)
			counts[addr]++;
		else
			counts[addr] = 0;
		var instance = counts[addr];
		var fileName = path + "/file"+ addr;
		console.log(fileName);
		fs.appendFile(fileName, request.url + "\n", function(err) {
			if (err) console.log("Error writing to file " + fileName);	
		});
		setTimeout( function() {
			var count = request.url.split("-")[1];
			response.write("world-" + count);
			response.statusCode = 200;
			response.end();
		}, 3000);
	} else if ( request.url.endsWith(".html") || request.url.endsWith(".js")) {
		// If it's a HTML or JS file, retrieve the file in the request
		response.statusCode = 200;
		var fileName = path + request.url;
		var rs = fs.createReadStream(fileName);
		console.log("Reading from file " + fileName);
		rs.on("error", function(error) {	
			console.log(error);
			response.write("Unable to read file : " + fileName);
			response.statusCode = 404;
		});
		rs.on("data", function(data) {
			response.write(data);
		});
		rs.on("end", function() {
			response.end();
		});
	} else {
		response.write("Unknown request " + request.url);
		response.statusCode = 404;
		response.end();
	}
};


// Start the server on the port and setup response
var port = 8080;
var server = http.createServer(serveRequest);
server.listen(port);
console.log("Starting server on port " + port);
