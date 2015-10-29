// Simple AJAX request issuer - keeps track of multiple requests

// Display the list of messages in flight
function displayInFlight(inflight) {
	return function() {	
		if (inflight.length > 0) {
			console.log("In flight messages : ");
			 console.log(inflight);
		}
	};
};

// Cancel the last message in flight
function CancelInflight(inflight) {
	return function() {
		if (inflight.length > 0) {
			inflight[inflight.length - 1].abort();
		} else {
			alert("No messages in flight");
		}
	};
}

var RequestCount = function(msg, inflight) {
	var count = 0;
	var sendRequest = function() {
		var xhr = new XMLHttpRequest();
		var name = "XHR " + count + " : ";
		var index = 0;
		xhr.open("GET", msg + '-' + count);
		count = count + 1;
		xhr.onload = function() {
			if (xhr.status==200) {
				console.log(name + "Received " + xhr.responseText);
			} else {	
				console.log(name + "Received error code : " + xhr.status);
			}
			inflight.splice(index, 1);
		};		
		xhr.ontimeout = function() {
			console.log(name + "Timed out after " + xhr.timeout + " ms");
			inflight.splice(index, 1);
		}
		xhr.onerror = function() {
			console.log(name + "Resulted in an error !");
			inflight.splice(index, 1);
		}  
		xhr.onabort = function() {
			console.log(name + "Aborted");
			inflight.splice(index, 1);
		}
		// All the handlers are setup, so send the message
		xhr.timeout = 5000;	 // Wait at most 5000 ms for a response
		index = inflight.length; // Store the index in the inflight list
		inflight.push(xhr);	 // Add it to the inflight messages before sending it
		xhr.send();
	}
	return sendRequest;
};


window.onload = function() {
	var ok = document.getElementById("OK");
	var count = 0
	var inflight = [];
	ok.addEventListener("click", RequestCount("/hello", inflight), false);	// sendRequest upon button click		
	var cancel = document.getElementById("Cancel");
	cancel.addEventListener("click", CancelInflight(inflight), false);	// cancel last sent request
	setInterval(displayInFlight(inflight), 1000);			// Display the inflight list
}
