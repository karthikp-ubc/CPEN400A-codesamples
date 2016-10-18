// Another Solution to the class activity (Slide 20)
// We need to use nested closures to preserve the state here

var invokeTimes = function(func, noTimes, time) {
	console.log("Setting up interval " + noTimes + " " + time);

	for (var i = 0; i < noTimes; ++i) {
		var timeoutHandler = function(count) {
			// timeOutHandler is a closure
			return function() {
				console.log( "invocation " + count);
				func(count);
			}
		}
		setTimeout(timeoutHandler(i), time * i);
	}
};

var setup = function() {
	invokeTimes( function(i) { alert("hello " + i); }, 5, 1000 );
}
