var http = require('http');
var fs = require('fs');

var timeMin = 200;
var timeMax = 700;

// Active requests
var requests = [];
var processing = false;

// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function executeLater(timeMin, timeMax, f) {
    var time = getRndInteger(timeMin, timeMax);
    setTimeout(f, time);
}

var serveRequest = function(request, response) {

    var start = Date.now();
    
    // Check if we already have a request processing
    if (processing) {
	// Add to queue
	requests.push( {request: request, response: response} );
	return;
    }

    // Not processing -- we can now process the current request
    processing = true; // We are now processing
    if ( request.url.startsWith("/request") ) {
	// Waste cycles and then return
	response.writeHeader(200, { "Content-type":"text/html"});
	executeLater(timeMin, timeMax, function() {

	    var procTime = (Date.now()-start).toString();
	    console.log("Local Processing Time: " + procTime + " | queue: " + requests.length);
	    response.write(procTime.toString());
	    response.end();

	    // We are done processing
	    processNextRequest();
	});
	
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

	    // We are done processing
	    processNextRequest();
	});
    } else {
	response.write("Unknown request " + request.url);
	response.statusCode = 404;
	response.end();
	
	// We are done processing
	processNextRequest();
    }
};

function processNextRequest() {
    processing = false; // not processing anymore
    
    // Check if there is a request in the queue
    if (requests.length > 1) {
	var nextReq = requests.shift();
	// Process it
	serveRequest(nextReq.request, nextReq.response);
    }
}

function publishLoad() {
    try {
	http.get("http://localhost:8079/load/" + port + "?load=" + requests.length, function(remoteResponse) {
            remoteResponse.on('data', function(d) {
            });
            remoteResponse.on('end', function() {
            });
	    remoteResponse.on('error', function() {
		// Nothing to do - load balancer not available
            });
	});
    }
    catch (ex) {

    }
}

// Start the server on the port and setup response

var args = process.argv;

var port = 8080;
if (args.length >= 3) {
    port = parseInt(args[2]);
}

var server = http.createServer(serveRequest);
server.listen(port);
console.log("Starting server on port " + port);

setInterval(publishLoad, 1000);
