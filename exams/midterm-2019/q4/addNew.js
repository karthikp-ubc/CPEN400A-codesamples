// Sample code for adding a new operator to a constructor function

var Point = function(x, y) {
	this.x = x;
	this.y = y;
};

var makeNew = function(constructor) {
	
	return function() {
		var obj = Object.create(constructor.prototype);
		constructor.apply(obj, arguments);
		return obj;
	}
}

var p = new Point(5, 2);
console.log(p);
console.log( Object.getPrototypeOf(p) );
var newPoint = makeNew(Point);
var q = newPoint(5, 2);
console.log(q); 
console.log( Object.getPrototypeOf(q) );
