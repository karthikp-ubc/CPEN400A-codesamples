var fs = require("fs");
var length = 0;
var fileName = "sample.txt";
fs.readFile(fileName, function(err, buf) {
		if (err) throw err;	
		length = buf.length;;
		console.log("Number of characters read = " + length);
	}
);

console.log("End of program");
