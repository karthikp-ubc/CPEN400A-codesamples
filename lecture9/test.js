// Simple example of promises

var p = new Promise( function(resolve, reject) {
		console.log("Enter Executor function");
		var r = Math.random() * 10;
		foo = (r > threshold) ? resolve : reject;
		var deferred = function() { 
			console.log("Promise executed");
			foo();
		}
		setTimeout( foo, delay );
		console.log("Exit Executor function");
	};

p.then( function() { 
		console.log("Resolved");
	}, function() {
		console.log("Rejected");
);

console.log("End of program");	 	
			
