// Searches for a given string in a file. Called with two command line arguments: fileName and string to search for.
// Assumes that length of the string being searched < length of buffer being read at any time 
// The above assumption is necessary as it concatenates atmost two buffers

var fs = require('fs');
if (! fs) process.exit(1);

if (process.argv.length < 4) {
	console.log("Syntax: fileName string");
	process.exit(2);
}

var fileName = process.argv[2];
var textToFind = process.argv[3];	
var readStream = fs.createReadStream(fileName);;
var oldBlob = "";
var index = -1;

readStream.on("data", function(blob) {
			console.log("Read " + blob.length +  " bytes");
			var newBlob = oldBlob + blob;
			index = newBlob.indexOf(textToFind);
			if (index >= 0) readStream.emit("end");
			oldBlob = blob;
		} );

readStream.on("end", function() {
		if (index>=0)
			console.log("Found string " + textToFind);
		else	
			console.log("Did not find string " + textToFind);
	} );

readStream.on("error", function() {
		console.log("Error occurred when reading from file " + fileName);
	} );

console.log("End of program");
