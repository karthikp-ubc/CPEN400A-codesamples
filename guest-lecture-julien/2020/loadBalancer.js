var http = require('http');
var ps = require('ps-node');
var pidusage = require('pidusage')

var port = 8079; // Load Balancer port

var CloudServer = function(pid, port, cpu) {
    this.pid = pid;
    this.port = port;
    this.cpu = cpu;
}
var cloudServers = [];


var loadBalance = function(request, response) {
	// TODO:
	// Send each request to one of the 4 servers
	// And send back the result to the client
}

var getCloudServerProcesses = function() {
 
    // A simple pid lookup
    ps.lookup({
	command: 'node',
	arguments: 'cloudServer*',
    }, function(err, resultList ) {
	if (err) {
            throw new Error( err );
	}
	
	resultList.forEach(function( process ){
            if( process ){
	
		console.log( 'Cloud Server: PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
		var cs = new CloudServer(process.pid, process.arguments[1], 0);
		cloudServers.push( cs );
		monitorCPU(cs);
            }
	});

	// Start server
	startServer();
	// console.log(cloudServers);
    });
}

function monitorCPU(cloudServer) {
    setInterval(function() {
	    pidusage(cloudServer.pid, function (err, stats) {
		console.log(stats)
		// => {
		//   cpu: 10.0,            // percentage (from 0 to 100*vcore)
		//   memory: 357306368,    // bytes
		//   ppid: 312,            // PPID
		//   pid: 727,             // PID
		//   ctime: 867000,        // ms user + system time
		//   elapsed: 6650000,     // ms since the start of the process
		//   timestamp: 864000000  // ms since epoch
		// }
		cloudServer.cpu = stats.cpu;
	    })
    }, 1000);

}

function startServer() {

    var server = http.createServer(loadBalance);
    server.listen(port);
    console.log("Starting server on port " + port);

}

// Get all cloud server processes and start the server
getCloudServerProcesses();
