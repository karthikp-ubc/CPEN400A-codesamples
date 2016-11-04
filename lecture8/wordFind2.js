// Searches for a given string in a file. Called with two command line arguments: fileName and string to search for.
// Does not assume length of the string being searched < length of buffer being read at any time 

var fs = require('fs');
if (! fs) process.exit(1);

if (process.argv.length < 4) {
	console.log("Syntax: fileName string");
	process.exit(2);
}

var fileName = process.argv[2];
var textToFind = process.argv[3];	
var readStream = fs.createReadStream(fileName);;
var index = -1;
var matchIndex = 0;

readStream.on("data", function(blob) {
		var str = blob.toString();
		console.log("Read " + blob.length + " bytes");
		for (var i=0; i<str.length; ++i) {
			// Increment matchIndex for every contiguous character that matches
			if (str[i]== textToFind[matchIndex]) { 
				matchIndex++;
				if (matchIndex==textToFind.length) {
					// If all the characters match, we have found it
					index = i;
					readStream.emit("end");	
					break;
				}
			} else if (matchIndex > 0){
				// reset the matchIndex even if a single character doesn't match
				matchIndex = 0;
			}
		}
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
