var http = require('http');
var fs = require('fs');

function wasteCycles(time) {
	var start = Date.now();

	do {

		var length = Date.now() - start;

	} while (length < time);
	
}

var serveRequest = function(request, response) {
	if ( request.url.startsWith("/cycles") ) {
		// Waste cycles
		response.writeHeader(200, { "Content-type":"text/html"});

		var start = Date.now();

		var timeToWaste = 1000;
		wasteCycles(timeToWaste);

		var procTime = (Date.now()-start).toString();
		console.log("Local Processing Time: " + procTime);
		response.write(procTime.toString());
		response.end(); 

	}
	else if ( request.url.endsWith(".html") || request.url.endsWith(".js")) {
		// If it's a HTML or JS file, retrieve the file in the request
		response.statusCode = 200;
		var fileName = request.url.substring(1);
		var rs = fs.createReadStream(fileName);
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

var args = process.argv;

var port = 8080;
if (args.length >= 3) {
	port = parseInt(args[2]);
}

var server = http.createServer(serveRequest);
server.listen(port);
console.log("Starting server on port " + port);