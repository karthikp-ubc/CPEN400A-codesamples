// Counts the total number of characters in a given text file

var fs = require('fs');
if (! fs) process.exit(1);

var length = 0;
var fileName = "sample.txt";

var readStream = fs.createReadStream(fileName);;

readStream.on("data", function(blob) {
			console.log("Read " + blob.length);
			length += blob.length;	
		} );

readStream.on("end", function() {
		console.log("Total number of chars read = " + length);
	} );

readStream.on("error", function() {
		console.log("Error occurred when reading from file " + fileName);
	} );

console.log("End of program");
