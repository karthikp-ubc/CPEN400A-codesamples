// Example from midterm exam

function Shape() {
	// Dummy class to be used as a prototype
	this.name = "Shape";
};

Shape.prototype.toString = function() { return this.name; };

function Rectangle(x, y) {
	this.x = x; this.y = y;
	this.name = "Rectangle : " + this.x + " " + this.y;
	this.area = function() { 
		return this.x * this.y;
	}
	this.perimeter = function() {
		return 2*(this.x + this.y); 
	}
}

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;

function Square(x) {
	this.x = x;
	Rectangle.call(this, x, x);
	this.name = "Square : " + this.x; 
}

Square.prototype = new Rectangle(0,0);
Square.prototype.constructor = Square;

var s = new Square(5);
var r = new Rectangle(2, 3);
document.writeln( r );
document.writeln( s) ;
document.writeln( r.area() );
document.writeln( s.area() );

var overRiddenProperties = function( obj ) {
	var prop; var overRiddenMethods = [];
	for (prop in obj) {
		// Write the code to check whether prop is an overridden method
		if (obj.hasOwnProperty(prop) && typeof(obj[prop]) == 'function') {
			var proto = Object.getPrototypeOf(obj);
			if ( proto && (prop in proto) )
				overRiddenMethods.push( prop );
		}
	};
	return overRiddenMethods;
}

console.log(s);
console.log( overRiddenProperties(r) );
console.log( overRiddenProperties(s) );
