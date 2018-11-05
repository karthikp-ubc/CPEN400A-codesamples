// Example showing chaining of promises

var randomPromise = function(threshold) {
	console.log("Calling randomPromise");
	return new Promise( function(resolve, reject) {
		var r = Math.random();
		console.log( "Random " + r);	
		// Resolve the promise after a certain time
		// Or reject it depending on the coin flip
		var func = (r > threshold) ? resolve : reject;
		setTimeout( func, 0 );
	});
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
