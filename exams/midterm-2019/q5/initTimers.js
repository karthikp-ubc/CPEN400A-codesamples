// Solution to question 5

var initTimers = function(times, foo) {
	var timers = [];
	for (var i=0; i<times.length; i++) {
		timers.push( setTimeout(foo(i), times[i]) );
	}
	return timers;
};

var logger = function(i) {
	return function() {
		console.log("invocation " + i); 
	}
};

var cancelTimers = function(timers, time) {
	var removeAll = function() {
		for (var i = 0; i < timers.length; i++) {
			clearTimeout(timers[i]);
		}
	}
	setTimeout(removeAll, time);
};

var timerList = initTimers([1000, 2000, 3000], logger);
console.log( timerList );
cancelTimers(timerList, 1500);

