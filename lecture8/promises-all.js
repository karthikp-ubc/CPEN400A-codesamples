// Example of promise.all

function valuePromise(value) {
	console.log("Creating valuePromise " + value);
	var r = Math.random();
	return new Promise( function(resolve, reject) {
		var func = (r>0.1) ? resolve : reject; 
		func(value);
	});
};

var promises = []
var n = 5;
// Initialize the promises array with 'n' promises
for (var i=0; i<n; i++) {
	promises.push( valuePromise(i) );
}

// Wait for all the promises to be resolved
var result = Promise.all( promises );

// Add a resolution function to get the values of each promise
result.then( function(values) {
	console.log("All promises resolved");
	for (var j=0; j<values.length; j++)
		console.log( "Promise " + j + " returned " + values[j] );
	} ).catch( function(value) {
		console.log("Promise not resolved " + value); 
	}
);

console.log("End of program");

