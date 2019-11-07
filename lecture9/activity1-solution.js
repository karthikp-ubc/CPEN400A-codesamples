// Prints the given ${time} after ${time} ms.
function resolveAfter(time){
    // to implement
    return new Promise( (resolve, reject) => {
		var foo = () => { 
			var r = Math.random();
			if (r > 0.5) resolve(time);
				else reject("Unknown");
			console.log(time);
		}		
		setTimeout(foo, time); 
	}		
    ); 
}

// Make the program print 500, 1000, 1500 
resolveAfter(500)
	.then( (x) => resolveAfter(x + 500) )
	.then( (x) => resolveAfter(x + 500) )
	.catch( (error) => { console.log("Error " + error); } ); 
