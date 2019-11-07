// Simple example of promises

var action = new Promise( (resolve, reject) => {
		console.log("Enter Executor function");
		var deferred = function() { 
			console.log("Promise started");
			var r = Math.random() * 10;
			if (r > 5)	
			     resolve("Success");
			else 
			     reject("Error");
			console.log("Promise executed");
		}
		setTimeout( deferred, 1000 );
		console.log("Exit Executor function");
	});

action.then( (result) => { console.log("Resolved " + result); }, 
	(error) => { console.log("Rejected " + error); }
);

console.log("End of program");	 	
			
