	
// This is an example of a higher-order function
var map = function( array, fn ) {
	// Applies fn to each element of list, returns a new list
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result.push( fn(array[i]) );
	}
	return result;
};

var l = [3, 1, 5, 7, 2];
document.writeln( map(l, function(num) { return num + 10; }) );

var add = function(a, b) {
	return a + b;
};

// This is an example of function currying
var add10 = add.bind(null, 10); 
document.writeln( map(l, add10) )

	
