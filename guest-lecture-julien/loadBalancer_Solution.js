var http = require('http');

var serverCount = 4;
var basePort = 8080;

var currentServer = 0;

var loadBalance = function(request, response) {

	var reqPort = basePort + currentServer;

	var start = Date.now();

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
            console.log("End Processing (" + reqPort + ") " + (Date.now() - start).toString());
        });
    });
    

	currentServer++;
	if (currentServer == 4)
		currentServer = 0;
}

var port = 8079;

var server = http.createServer(loadBalance);
server.listen(port);
console.log("Starting server on port " + port);