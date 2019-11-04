// Sample code for the bindAll function

var bindArray = function(arr, foo) {
	var result = foo;
	for (var i=0; i<arr.length; i++) {
		result = result.bind(null, arr[i]);
	}
	return result;
}

var sum = function(a, b, c, d, e) {
	return a + b + c + d + e;
}
var goo = bindArray([1, 3, 5], sum);
console.log( goo(4, 5) );
console.log( goo(2, 4) );
