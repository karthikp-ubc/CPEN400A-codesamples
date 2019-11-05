// Example to show settled and rejected promises

// Comment out the appropriate line of code below
var p = Promise.resolve("hello");
// var p = Promise.reject("hello");

p.then( function(str) {
		console.log("Resolved: " + str);
	}, function(err) {
		console.log("Error: " + err);
	}
);

console.log("End of program");
