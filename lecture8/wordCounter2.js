var fs = require("fs");
var length = 0;
var fileName = "sample.txt";
try {
	fs.readFile(fileName, function(err, buf) {
			if (err) throw err;	
			length = buf.length;;
			console.log("Number of characters read = " + length);
		}
	);
} catch (error) {
	console.log("Error occurred when reading file : " + fileName);
};

console.log("End of program");
