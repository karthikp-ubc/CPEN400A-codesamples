// Implementation using classical (constructor) inheritance

var Point = function (x, y) {
	this.x = x;
	this.y = y;
	this.area = function() {
		return 0;
	}
};  

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

console.log(Point);

var Circle = function(x, y, r) {
	Point.call(this, x, y);
	this.r = r;
	this.area = function() {
		return 3.1412 * this.r * this.r;
	}
};

Circle.prototype = new Point();
Circle.prototype.constructor = Circle;

Circle.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + ")";
}

var Ellipse = function(x, y, r1, r2) { 
	Circle.call(this, x, y, r1);
	this.r2 = r2;
	this.area = function() {
		return 3.1412 * this.r * this.r2;
	} 

};

Ellipse.prototype = new Circle();
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + "," + this.r2 + ")";
} 

function iterateOverProperties(obj) {
	var e; var str = "{ ";
	var proto = Object.getPrototypeOf(obj);
	for (e in obj) {
		if ( ( obj.hasOwnProperty(e) ) 
		  && ( typeof(obj[e]) != "function") 
		  && (e in proto ) ) {
				str = str + e + " = " + obj[e] + " , ";
		} 
	}
	str = str + " } ";
	return str;
}

var p = new Point(10, 20);
var c = new Circle(20, 30, 5);
var e = new Ellipse(5, 10, 5, 2);


document.writeln( "Point p = " + p );
document.writeln( "p's area = " + p.area() );

console.log( Object.getPrototypeOf(p) );
console.log( "p instanceof Point = " + (p instanceof Point) );
console.log( "p instanceof Object = " + (p instanceof Object) );

document.writeln( "Circle c = " + c );
document.writeln( "c's area = " + c.area() );
console.log( Object.getPrototypeOf(c) );
console.log( "p instanceof Circle = " + (p instanceof Circle) );
console.log( "c instanceof Point = " + (c instanceof Point) );


document.writeln( "Ellipse e = " + e );
document.writeln( "e's area = " + e.area() );
console.log( Object.getPrototypeOf(e) );
console.log( "e instanceof Ellipse = " + (e instanceof Ellipse) );
console.log( "e instanceof Circle = " + (e instanceof Circle) );
console.log( "e instanceof Point = " + (e instanceof Point) );

delete e.area;  // Now this reverts to circle's area
document.writeln( "e's area (wrong!) = " + e.area() );

console.log( "p's properties " + iterateOverProperties(p) );
console.log( "c's properties " + iterateOverProperties(c) );
console.log( "e's properties " + iterateOverProperties(e) );
