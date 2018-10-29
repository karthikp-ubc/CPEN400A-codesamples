var fs = require("fs");
var length = 0;
var fileName = "sample.txt";
fs.readFile(fileName, function(err, buf) {
		if (err) {
			console.log("Error in reading file " + err);
		} else {	
			length = buf.length;;
			console.log("Number of characters read = " + length);
		}
	}
);
console.log("End of program");
