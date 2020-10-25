// Generator to read a list of files asynchronously

var fs = require("fs");
if (! fs) process.exit(1);

function* fileReader(fileNames) {
   for (var i=0; i<fileNames.length; ++i) { 
        console.log("Reading file " + i)
        yield new Promise((resolve, reject) => {
            var name = fileNames[i];
            console.log("Calling readFile of " + name)
            fs.readFile(name, (err, data) => {
                console.log("Done reading file " + name);
                if (err) {
                    console.log("Rejecting promise ");  
                    reject( { file: name, msg: err } );
                } else {
                    console.log("Resolving promise ");
                    resolve(data);
                }
            });
        });
   };
}

fileNames = ["sample.txt", "sample2.txt", "sample3.txt" ];
var frGen = fileReader(fileNames);
var fp;
for (fp of frGen) {
    console.log("Calling next");
    fp.then( (result) => console.log("Number of bytes read = " + result.length),
            (error) => console.log("Error in reading file " + 
                                            error.file + " : " + error.msg) 
        ).catch( () => console.log("Unexpected error") );     
}