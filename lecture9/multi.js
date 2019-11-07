var multi = Promise.race([
	new Promise((resolve, reject)=> setTimeout(()=> resolve("A"), 2000)), 
	new Promise((resolve, reject )=> setTimeout(()=> resolve("B"), 3000)),
	new Promise((resolve, reject )=> setTimeout(()=> reject("C"), 1000)),
]);

multi.then( (results)=> console.log("Resolved first " + results), 
	    (error)=> console.log("Rejected " + error));
