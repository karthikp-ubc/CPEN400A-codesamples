// Solution to first part of class activity on Slide 25
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
var p1 = readFile("sample.txt");
var p2 = readFile("sample.txt");

var p3 = Promise.all([p1, p2]);
p3.then( function(bufs) {
		var concatenated = "", total = 0;
		for (var i=0; i<bufs.length; i++) {
			concatenated = concatenated + bufs[i];
			total += bufs[i].length;
		}
		fs.writeFile(outputName, concatenated, (err) => {
			if (err) throw Error("Error writing file: " + err);			
		});
	}
).catch( function(error) {
	console.log("Encountered error " + error.message);
});

console.log("End of program");
