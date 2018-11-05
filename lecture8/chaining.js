// Example showing chaining of promises

var randomPromise = function(threshold) {
	console.log("Calling randomPromise");
	var r = Math.random();
	console.log( "Random " + r);	
	return (r > threshold) ? Promise.resolve() : Promise.reject(); 	
};

var p = randomPromise(0.5);

var foo = function() { 
	console.log("Resolved"); 
}

var bar = function() {
	console.log("Rejected");
}

// This is how  you'd chain promises
// Can  you predict the output of this sequence ?
p.then(foo, bar).then(foo, bar).then(foo, bar);

console.log("End of program");
