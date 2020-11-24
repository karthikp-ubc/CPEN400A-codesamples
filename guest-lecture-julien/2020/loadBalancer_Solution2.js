var http = require('http');

var port = 8079; // Load Balancer port

var CloudServer = function(port, load) {
    this.port = port;
    this.load = load;
}
var cloudServers = [];

var currentServer = 0;

function handleRequest(request, response) {
    if (request.url.includes("load")) {
	// Update load info for that server

	// Get port
	var lastSep = request.url.lastIndexOf("/") + 1;
	var paramStart = request.url.lastIndexOf("?");
	var port = request.url.substring(lastSep, paramStart);
	var load = parseInt(request.url.substring(paramStart+1));

	var added = false;
	cloudServers.forEach( (cloudServer) => {
	    if (cloudServer.port == port) {
		cloudServer.load = load;
		added = true;
		//console.log("Updating load for " + port + " : " + load);
	    }
	});
	if (added == false) {
	    // Define new server
	    cloudServers.push( new CloudServer(port, load) );
	}

	return;
    }

    // For other requests:
    loadBalance(request, response);
}

var loadBalance = function(request, response) {

    // TODO:
    // Send each request to one of the servers
    // And send back the result to the client

    if (cloudServers.length == 0) {
	// No cloud servers yet -- return
	response.end();
	return;
    }

    //naiveLoadBalancing();
    //roundRobinLoadBalancing();
    optimalLoadBalancing();
    console.log("Chose server " + currentServer + " | load: " + cloudServers[currentServer].load);
    
    var reqPort = cloudServers[currentServer].port;
    //var start = Date.now();
    
    http.get("http://localhost:" + reqPort + request.url, function(remoteResponse) {
        // Continuously update stream with data
        var body = '';
        remoteResponse.on('data', function(d) {
            body += d;
        });
        remoteResponse.on('end', function() {
            // Send back to response stream
            response.write(body);
            response.end();
            //console.log("End Processing (" + reqPort + ") " + (Date.now() - start).toString());
        });
    });
    
}

function naiveLoadBalancing() {
    currentServer = 0;
}

function roundRobinLoadBalancing() {
    currentServer++;
    if (currentServer == cloudServers.length)
	currentServer = 0;
}

function optimalLoadBalancing() {
    var lowest = 1000000;
    for (var i=0; i<cloudServers.length; i++) {
	if (cloudServers[i].load < lowest) {
	    lowest = cloudServers[i].load;
	    currentServer = i;
	}
    };
}

function startServer() {

    var server = http.createServer(handleRequest);
    server.listen(port);
    console.log("Starting server on port " + port);

}

startServer();
