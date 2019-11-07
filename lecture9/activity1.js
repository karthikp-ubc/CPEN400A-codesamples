// Prints the given ${time} after ${time} ms.
function resolveAfter(time, threshold = 0.5){
    // to implement
    return new Promise( function(resolve, reject) {
	setTimeout( () => { 
			console.log(time);
			if (Math.random() < threshold) 
				resolve(time);
			else
				reject(time);
		}, time);
    });
}

// Make the program print 500, 1000, 1500 
var first = resolveAfter(500, 1);
console.log("First = ");
console.log(first);

var second = first.then( (x) => resolveAfter(x + 500, 0.75) );
console.log("Second = ");
console.log(second);

var third = second.then( (x) => resolveAfter(x + 500, 0.5) );
console.log("Third = ");
console.log(third);

var fourth = third.catch( function(err) { console.log("Rejected " + err); } );
console.log("Fourth = ");
console.log(fourth);
