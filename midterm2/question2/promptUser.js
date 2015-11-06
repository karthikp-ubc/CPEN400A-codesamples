// Question 2 from the midterm exam

var promptUser = function(message, timePeriod) {
	var timeoutHandler = function() {
		var answer = confirm(message);
		if (answer) {
			setTimeout(timeoutHandler, timePeriod);
			console.log("Setting timer ");
		}
	};
	console.log("Setting timer ");
	setTimeout(timeoutHandler, timePeriod);
};


var setup = function() {
	promptUser("Continue", 5000);
}

