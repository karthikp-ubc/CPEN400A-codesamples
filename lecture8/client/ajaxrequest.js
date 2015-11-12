// Simple AJAX request issuer - keeps track of multiple requests

// Display the list of messages in flight
function displayInFlight(inflight) {
	return function() {	
		if (inflight.length > 0) {
			var result = "In flight messages : ";
			for (var i=0; i<inflight.length; i++) {
				result = result + " (" + inflight[i] + ")";
			}
			console.log(result);
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
		var name = "XHR " + count;
		var index = 0;
		xhr.open("GET", msg + "-" + count);
		count = count + 1;
		var removeFromList = function() {
			index = inflight.indexOf(xhr);
			if (index > -1) {
				inflight.splice(index, 1);
			} else {
				alert(name + " not found !");
			}
		};
		xhr.onload = function() {
			if (xhr.status==200) {
				console.log(name + " : Received " + xhr.responseText);
			} else {	
				console.log(name + " : Received error code : " + xhr.status);
			}
			removeFromList();
		};		
		xhr.ontimeout = function() {
			console.log(name + " : Timed out after " + xhr.timeout + " ms");
			removeFromList();
		}
		xhr.onerror = function() {
			console.log(name + " : Resulted in an error !");
			removeFromList();
		};  
		xhr.onabort = function() {
			console.log(name + " : Aborted");
			removeFromList();
		};
		xhr.toString = function() {
			return name;
		};
		// All the handlers are setup, so send the message
		xhr.timeout = 5000;	 // Wait at most 5000 ms for a response
		console.log("Sending request " + xhr);
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
