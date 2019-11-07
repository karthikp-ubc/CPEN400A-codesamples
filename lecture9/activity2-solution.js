var fs = require("fs");

// you can use fs.readFile
function readFile (filepath){
    // to implement
    return new Promise( (resolve, reject) => { 
		fs.readFile(filepath, (err, data) => {
			if (err) reject(err);
			    else resolve(data);
		});
	}
    );	

}

// testing the functionality
readFile("example-blob")
.then((result)=> console.log("File is " + result.length + " Bytes"))
.catch((error)=> console.log("Error while reading file " + error));
