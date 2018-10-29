// Example of EventEmitter in node.js 
// Source: Node.js succinctly

var eventMod = require('events');
var EventEmitter = eventMod.EventEmitter;
if (! EventEmitter) process.exit(1);

var connection = function(id) {
	console.log("client id : " + id); 
};

var message = function(msg) {
	console.log("message : " + msg); 
};

var myEmitter = new EventEmitter();
myEmitter.on("connection", connection);
myEmitter.on("message", message);

// test cases for the above
// should print 1, 2, hello to the console
myEmitter.emit("connection", 1);
myEmitter.emit("connection", 2);
myEmitter.emit("message", "hello");

// Because we removed the listener, it shouldn't print world
// myEmitter.removeListener("message", message);
myEmitter.emit("message", "world");





