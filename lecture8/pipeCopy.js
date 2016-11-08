// Copies files using pipes
var fs = require("fs");
if (! fs) process.exit(1);

// Open the read and write streams
var readStream = fs.createReadStream("sample.txt");
var writeStream = fs.createWriteStream("sample-copy.txt");

// Copies contents of read stream to write stream
readStream.pipe( writeStream );


 
