var http = require('http');

var sum = 0;
var count = 0;

function sendRequest() {

    var start = Date.now();

    http.get("http://localhost:8079/request", function(remoteResponse) {
	
        remoteResponse.on('data', function(d) {
	    
        });
        remoteResponse.on('end', function() {
            // Send back to response stream
	    var diff = Date.now() - start;
	    sum += diff;
	    count += 1;
            console.log("End Processing: " + (diff).toString() + " | Avg = " +  Math.floor(sum/count));
        });
    });

}

setInterval(sendRequest, 100);
