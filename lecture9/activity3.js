// Stub code for activity 3
var fs = require("fs");
if (! fs) process.exit(1);

function readFile(fileName) {
	// Return a promise which reads the file and is resolved (or is rejected)
	return new Promise( (resolve, reject) => {
		fs.readFile(fileName, (err, buf) => {
			if (err) 
				reject(err);
			else 
				resolve(buf);
		}); // End of readFile 
	}); // End of promise
};

var outputName = "sample-out.txt"

// Write your code here to read the files and concatenate them


console.log("End of program");
