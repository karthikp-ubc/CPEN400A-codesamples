	
var retain = function( arr, foo ) {
	// Applies foo to each element of list, returns a new list
	// containing the list of elements thatend up satisfying foo
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if ( foo(arr[i]) ) result.push( arr[i] );
	}
	return result;
};

var l = [3, 1, 5, 7, 2];
var lesserThan5 = function(x) { return x<5; };
console.log(l);
console.log( retain(l, lesserThan5) );

	
