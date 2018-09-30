	
// This is an example of a higher-order function
var map = function( array, fn ) {
	// Applies fn to each element of list, returns a new list
	var result = [];
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		var args = [ element ];
		result.push( fn.apply(null, args) );
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

// Solution to the class activity for the filter function is below;
var filter = function( array, fn ) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
                var element = array[i];
                var args = [ element ];
                if (fn.apply(null, args) ) result.push(element); 
        }
        return result;
};

var lesserThan = function(a, b) { return (a < b) ? true:false; } 
var greaterThan5 = lesserThan.bind(null, 5);

var a = [ 1, 3, 10, 8, 2, 7, 6 ];
document.writeln(a);
var c = filter( a, greaterThan5);
document.writeln(c);
	
