// This shows how to use Prototypal inheritance in JavaScript

var Point = {
	init: function(x, y) {
		this.x = x;
		this.y = y;
	},
	area : function() {
		return 0;
	},
	toString: function() {
		return "(" + this.x + "," + this.y + ")";
	}
}; 


var Circle = Object.create(Point);
Circle.init = function(x, y, r) {
	Point.init.call(this, x, y);
	this.r = r;
};
Circle.area = function () {
	return 3.14 * this.r * this.r;
};	
Circle.toString =  function() {
	return "(" + this.x + "," + this.y + ", " + this.r + ")";
};

var Ellipse = Object.create(Circle);
Ellipse.init = function(x, y, r, r2) {
	Circle.init.call(this, x, y, r);
	this.r2 = r2;
};	
Ellipse.area = function() { 
	return 3.14 * this.r * this.r2;
};	
Ellipse.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + " , " + this.r2 + ")";
};

var p = Object.create(Point);
p.init(10, 20);
document.writeln( "Point p = " + p );
document.writeln( "p's area = " + p.area() );
console.log( Object.getPrototypeOf(p) );

var c = Object.create(Circle);
c.init(20, 30, 5);
document.writeln( "Circle c = " + c );
document.writeln( "c's area = " + c.area() );
console.log( Object.getPrototypeOf(c) );

var e = Object.create(Ellipse);
e.init(5, 10, 5, 2);
document.writeln( "Ellipse e = " + e );
document.writeln( "e's area = " + e.area() );
console.log( Object.getPrototypeOf(e) ); 
console.log( Object.getPrototypeOf( Object.getPrototypeOf(e) ) );

var e2 = Object.create(Ellipse);
e2.init(0, 0, 0, 0); 
document.writeln( "Ellipse e = " + e );
document.writeln( "Ellipse e2 = " + e2 );
console.log( Object.getPrototypeOf(e2) ); 
console.log( Object.getPrototypeOf( Object.getPrototypeOf(e2) ) );

function iterateOverProperties(obj) {
	var e; var str = "{ ";
	var proto = Object.getPrototypeOf(obj);
	console.log(proto);
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

console.log( "p's properties " + iterateOverProperties(p) );
console.log( "c's properties " + iterateOverProperties(c) );
console.log( "e's properties " + iterateOverProperties(e) );
