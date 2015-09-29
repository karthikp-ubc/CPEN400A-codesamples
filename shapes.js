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
Ellipse.prototype.constructor = Circle;
Ellipse.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + "," + this.r2 + ")";
}

function iterateOverProperties(obj) {
	var e; var str = "{ ";
	for (e in obj) {
		if (! obj.hasOwnProperty(e) ) continue;
		if (typeof(obj[e]) != "function") {
			str = str + e + " = " + obj[e] + " , ";
		} 
	}
	str = str + " } ";
	return str;
}

var p = new Point(10, 20);
var c = new Circle(20, 30, 5);
var e = new Ellipse(5, 10, 5, 2);

document.writeln( p );
document.writeln( p.area() );
console.log( Object.getPrototypeOf(p) );
console.log( p instanceof Point );
console.log( p instanceof Object );

document.writeln( c );
document.writeln( c.area() );
console.log( Object.getPrototypeOf(c) );
console.log( p instanceof Circle );
console.log( c instanceof Point );

document.writeln( e );
document.writeln( e.area() );
console.log( Object.getPrototypeOf(e) );
console.log( e instanceof Ellipse );
console.log( e instanceof Circle );
console.log( e instanceof Point );

console.log( iterateOverProperties(p) );
console.log( iterateOverProperties(c) );
console.log( iterateOverProperties(e) );
