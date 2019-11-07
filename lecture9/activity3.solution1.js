// Solution to first part of class activity on Slide 25
var fs = require("fs");
if (! fs) process.exit(1);

function readFile(fileName) {
	// Return a promise which reads the file and is resolved (or is rejected)
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

var outputName = "sample-out.txt"
var p1 = readFile("sample.txt");
var p2 = readFile("sample.txt");

function doneReading(buf) {
	console.log("Read " + buf.length + " characters");
	return buf;
};

function errorReading(err) {
	console.log("Error reading file " + err);
	return null;
};

p1.then(doneReading).catch(errorReading);
p2.then(doneReading).catch(errorReading);

var p3 = Promise.all([p1, p2]);
p3.then( function(bufs) {
		console.log("Both files read");
		var concatenated = "", total = 0;
		for (var i=0; i<bufs.length; i++) {
			concatenated = concatenated + bufs[i];
			total += bufs[i].length;
		}
		fs.writeFile(outputName, concatenated, function(err) {
			if (err) throw Error("Error writing file: " + err);			
		});
		console.log("Wrote " + total + " bytes");
	}
).catch( function(error) {
	console.log("Encountered error " + error.message);
});

console.log("End of program");
