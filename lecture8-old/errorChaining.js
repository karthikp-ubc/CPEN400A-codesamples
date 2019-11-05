// Example of error handling and passing in chained promises

var errorPromise = function(msg) {
	var r = Math.random();
	return new Promise( function(resolve, reject) {
		console.log("Creating new promise");
		if (r>0.5)
			throw new Error(msg);
		else
			resolve();
	});	
}

var p = errorPromise("Original");

// The same handler can handle both errors in the 
// original promise and in any resolution handlers
p.then( function() {
		console.log("resolved");
	}
).then( function() {
		throw new Error("Resolution");
	}	
).catch( function(err) {
		console.log("Error : " + err.message);
	}
);

console.log("End of program");
