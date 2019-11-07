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

action.then( (result) => 
	{ return new Promise( (resolve, reject) => resolve("Action resolved") ); }, 
	(error) => { throw new Error("Action rejected ") ; }
).then( (result) => { console.log("Success: " + result); } 
).catch( (error) => { console.log("Error: " + error.message); }
).finally( () => { console.log("Finally done"); } );
 
console.log("End of program");	 	
			
