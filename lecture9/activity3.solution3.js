// Alternate solution to second part of class activity on Slide 25 using Promise.race
//
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

var outputName = "sample-out2.txt"
var p1 = readFile("sample.txt");
var p2 = readFile("sample.txt");

function doneReading(buf) {
	console.log("Read " + buf.length + " characters");
	fs.appendFile(outputName, buf, (err) => {
		if (err) throw Error("Error writing file: " + err);			
	});
	console.log("Done writing");
};

function errorFunc(err) {
	console.log("Error reading or writing file " + err);
	throw new Error(err);
};

fs.open(outputName,"w", (err, file) => { 
	if (err) errorFunc();
	var pList = [ p1, p2 ];

	// Iterate until all the promises complete
	while (pList.length>0) {
		// Write the contents of the file when any promise completes
		var p = Promise.race(pList);
		p.then(doneReading).catch(errorFunc);
		// Remove the promise that finished from the array
		var i = pList.indexOf(p);
		pList.splice(i, 1);
	}
});

console.log("End of program");
