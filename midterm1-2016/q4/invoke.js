function invoke(o, foo) {
	// The compilcated invoation is needed because arguments is not really an array
	// The simpler way to invoke it would be
	// 	var args = arguments.slice(2, arguments.length);
	// If you wrote the code above, I'd give you full points
	var args = Array.prototype.slice.call(arguments, 2, arguments.length);
	return foo.apply(o, args); 
}

var Person = function(name) {
	this.name = name;
}

var print = function(str) {
	console.log(str + " " + this.name);
}

var p = new Person("XYZ");
invoke(p, print, "hello");
