// Solution to the class activity (Slide 20)

var invokeTimes = function(func, noTimes, time) {
	console.log("Setting up interval " + noTimes + " " + time);
	var count = 0;
	var timeoutHandler = function() {
		// timeOutHandler is a closure
		console.log( "invocation " + count);
		func(count);
		count = count + 1;
		if (count < noTimes) {
			setTimeout(timeoutHandler, time);
		}
	};
	if (count>0) setTimeout(timeoutHandler, time);
};

var setup = function() {
	invokeTimes( function(i) { alert("hello " + i); }, 10, 1000 );
}
