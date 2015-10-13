// Simple example to combine closures and timeouts


var invokeTimes = function(func, noTimes, time) {
	console.log("Setting up interval " + noTimes + " " + time);
	// timeOutHanlder is a closure
	var count = 0;
	var timeoutHandler = function() {
		return function() {
			console.log( "invocation " + count);
			func(count);
			count = count + 1;
			if (count < noTimes) {
				setTimeout(timeoutHandler(), time);
			}
		}
	};
	setTimeout(timeoutHandler(), time);
};

var setup = function() {
	invokeTimes( function(i) { alert("hello " + i); }, 10, 1000 );
}
