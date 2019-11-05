// Example of promise.race

function valuePromise(value) {
	console.log("Creating valuePromise " + value);
	var r = Math.random();
	var delay = Math.random() * 1000;
	return new Promise( function(resolve, reject) {
		var func = (r>0.5) ? resolve : reject; 
		setTimeout( func.bind(null, value), delay );
	});
};

var promises = []
var n = 5;
// Initialize the promises array with 'n' promises
for (var i=0; i<n; i++) {
	promises.push( valuePromise(i) );
}

// Wait for any of the promises to be resolved
var result = Promise.race( promises );

// Add a resolution function to get the values of each promise
result.then( function(value) {
	console.log( "Promise resolved : " + value );
} ).catch( function(value) {
	console.log( "Promise rejected : " + value );
});

console.log("End of program");

