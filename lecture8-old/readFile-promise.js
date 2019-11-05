var fs = require("fs");
if (! fs) process.exit(1);

// This function reads a new file and returns a promise
// It doesn't wait for the read to be complete 
function readFile(fileName) {
	return new Promise(function(resolve, reject) {
		console.log("Creating a new promise");
		fs.readFile(fileName, function(err, buf) {
			if (err) {
				console.log("Rejecting the promise");
				reject(err);
			} else {
				console.log("Resolving the promise");
				resolve(buf);
			}	
		}); // End of readFile 
	}); // End of promise
};

// Try giving a wrong name here to reject the promise
var fileName = "sample.txt";

// Get a new promise when you call readFile
var promise = readFile(fileName);

// Setup the success and failure handlers for the promise
promise.then( function(contents) {
		// fulfilment
		console.log("Read " + contents.length + " bytes");
	}, function(err) {
		// rejection
		console.log("Error reading file " + err);
	}
);

console.log("End of program");
