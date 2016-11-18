// The original buggy code
var Speakers2 = function(names) {
	s = [];
	for (var i=0; i<names.length; i++) {
		var val = i;
		s[i] = function(message) {
			return names[val] + " says " + message;
		};
	}
	return s;
};

// Wrong fix - will not work
var Speakers3 = function(names) {
	s = [];
	for (var i=0; i<names.length; i++) {
		var val = i;
		s[i] = function(message) {
			var val2 = val;
			return names[val2] + " says " + message;
		};
	}
	return s;
};

// This fix will not work either 
var Speaker = function(name, message) {
	return name + " says + " message;	
};

var Speakers4 = function(names) {
	s = [];
	for (var i=0; i<names.length; i++) {
		var val = i;
		s[i] = Speaker(names[val2], message);
	}
	return s;
};


// The code below is the correct way to fix it - by adding an extra layer of closures
var Speaker = function(name) {
	return function(message) {
		return name + " says " + message;
	};
}; 

var Speakers = function(names) {
	s = [];
	for (var i=0; i<names.length; i++) {
		var val = i;
		s[i] = Speaker( names[val] );
	}
	return s;
};


// This is the common test code for all the examples earlier
var speakers = Speakers4(["Jane", "Lisa", "John"]);
for (var j=0; j<speakers.length; j++) {
	console.log( speakers[j]("hello") );
};
// End of test case
