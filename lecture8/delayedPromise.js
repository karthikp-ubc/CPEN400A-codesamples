// Example of chained promises that each delay by a different amount

var delayedPromise = function(delay) {
	return new Promise( function(resolve, reject) {
		console.log("Delayed promise = " + delay);
		setTimeout(resolve, delay);
	});
}

var p = delayedPromise(1000);

p.then( function() {
	console.log("First promise");
	return delayedPromise(2000);
}).then( function() {
	console.log("Second promise");
	return delayedPromise(3000);
}).then( function() {
	console.log("Done");
});	

console.log("End of program");
