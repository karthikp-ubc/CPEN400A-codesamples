// Simple AJAX request issuer - keeps track of multiple requests
var RequestCount = function() {
	var count = 0;
	var sendRequest = function() {
		var xhr = new XMLHttpRequest();
		count = count + 1;
		var index = count;
		var name = "XHR " + index;
		xhr.open("GET","/hello-" + index);
		xhr.onload = function() {
			if (xhr.status==200) {
				console.log(name + " : Received " + xhr.responseText);
			} else {	
				console.log(name + " : Received error code : " + xhr.status);
			}
			count = count - 1;
		};		
		xhr.ontimeout = function() {
			console.log(name + " : Timed out after " + xhr.timeout + " ms");
			count = count - 1;
		}
		xhr.onerror = function() {
			console.log(name + " : Resulted in an error !");
			count = count - 1;
		};  
		xhr.onabort = function() {
			console.log(name + " : Aborted");
			count = count - 1;
		};
		// All the handlers are setup, so send the message
		xhr.timeout = 5000;	 // Wait at most 5000 ms for a response
		if (count <=5) {
			console.log("Sending request " + name);
			xhr.send();
		} else {
			alert("Too many messages in flight");
		};
	};
	return sendRequest;
};


window.onload = function() {
	var ok = document.getElementById("OK");
	ok.addEventListener("click", RequestCount(), false);	// sendRequest upon button click		
}
