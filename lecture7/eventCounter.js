// Solution to class activity on Slide 17

var EventEmitter = require('events').EventEmitter;
if (! EventEmitter) process.exit(1);
var fs = require("fs");

function registerEvents(emitter, keywords) {
	var counts = [];
	var incrementCounter = function(index) {
		return function() {
			counts[index]++;		
		}
	}
	for (var i=0; i<keywords.length; ++i) {
		var keyword = keywords[i];
		counts[i] = 0;
		emitter.on(keyword, incrementCounter(i) );	
	}
	return function() {
		return counts;
	}
};

// Initialize an event emitter and setup handlers for the keywords 
var keywords = ["a", "the", "this", "is", "an", "test"];
var e = new EventEmitter();
var getCounts = registerEvents(e, keywords);

// Read the file contents and emit it to the stream one word at a time
var text = fs.readFileSync("sample.txt").toString();
var words = text.split(" ");
words.forEach( function(word){
		e.emit(word.trim());	
	});

// Print the list of counters
var counts = getCounts();
console.log("Counters: ");	
for (var i=0; i<counts.length; i++) {
	var keyword = keywords[i];
	console.log("\tCount[ " + keyword + " ]\t=\t" + counts[i]);
}
console.log("=================");
 

