var http = require('http');


function sendRequest() {

    var start = Date.now();

	http.get("http://localhost:8080/cycles", function(remoteResponse) {

        remoteResponse.on('data', function(d) {

        });
        remoteResponse.on('end', function() {
            // Send back to response stream
            console.log("End Processing: " + (Date.now() - start).toString());
        });
    });

}

setInterval(sendRequest, 800);