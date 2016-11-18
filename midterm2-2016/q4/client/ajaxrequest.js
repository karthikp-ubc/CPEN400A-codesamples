// Solution to part 4A and 4B


function ajaxRequest(url, timeout, onSuccess, onFailure) {
	var successes  = 0, failures = 0;
	return function() {
		var req = new XMLHttpRequest();
		req.open("GET", url);
		req.timeout = timeout;
		req.onerror = function() { 
			onFailure;
			failures++;
		}
		req.ontimeout = req.onError;
		req.onabort = req.onError; // optional
		req.onload = function() {
			if (req.status==200) {
				onSuccess();
				successes++;
			}
			else {
				onFailure();
				failures++;
			}
			console.log("Successes = " + successes);
			console.log("Failures = " + failures);
		}
		console.log("Sending request " + req);
		req.send();
	}
}

window.onload = function() {
	var ok = document.getElementById("OK");
	var succ = function() { alert("success"); }
	var fail = function() { alert("failure"); }
	ok.addEventListener("click", 
			ajaxRequest("/hello", 3000, succ, fail)
		); 
}
