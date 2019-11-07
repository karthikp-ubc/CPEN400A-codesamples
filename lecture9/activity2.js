var fs = require("fs");

// you can use fs.readFile
function readFile (filepath){
    // to implement
}

// testing the functionality
readFile("example-blob")
.then((result)=> console.log("File is " + result.length + " Bytes"))
.then(()=> {
    readFile("does-not-exist")
    .catch((error)=> console.log("Error while reading file"));
});
