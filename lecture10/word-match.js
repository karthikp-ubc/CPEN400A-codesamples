// Program to generate a generator that matches a string upto a given word and returns the 
// rest of the text as a generator itself. It should only do the matching on demand. 

var fs = require("fs");
if (! fs) process.exit(1);

function* wordMatchGen(text, word) {
    console.log("Starting generator on " + word)
    var index = 0;
    while ( (index = text.indexOf(word)) >= 0 ) { 
        // Replace the current text with the text after the word is found
        var newText = text.slice(index + word.length);
        text = newText;
        yield index;
    } 
}

function countMatches(fileName, match) {
    fs.readFile(fileName, (err, data) => {
       var wordCount = 0;
       if (! err) {
           console.log("Setting up wordMatch", data.length)
           var wg = wordMatchGen(data, match);
           while (! (wg.next()).done) {
                wordCount++;
           }
           console.log("Number of matches = " + wordCount);
       } else 
           console.log(err);
    });
};

countMatches("sample2.txt", "the");


