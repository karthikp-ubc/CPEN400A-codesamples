
var invokeN = function(handler, n) {
	var timeoutHandler = function(i) {
		return function() {
			handler(i);
		}
	};
	for (var i=0; i<n; i++) {
		var time = i * 1000;
		setTimeout(timeoutHandler(i), time);
	}
};

var setup = function() {
	// This is an example of invokeN's invocation
	invokeN( function(i) { alert("hello " + i); }, 5 );
}
	
