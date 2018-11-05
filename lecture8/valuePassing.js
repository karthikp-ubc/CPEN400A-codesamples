// Example showing chaining of promises

var randomPromise = function(threshold, value) {
	console.log("Calling randomPromise");
	var r = Math.random();
	console.log( "Random " + r);	
	return (r > threshold) ? Promise.resolve(value) : Promise.reject(value); 	
};

var p = randomPromise(0.5, 100);

var foo = function(val) { 
	console.log("Resolved: " + val); 
	return val + 1;
}

var bar = function(val) {
	console.log("Rejected: " + val);
	return val + 1;
}

// This is how  you'd chain promises
// Can  you predict the output of this sequence ?
p.then(foo, bar).then(foo, bar).then(foo, bar).then(foo, bar);

console.log("End of program");
