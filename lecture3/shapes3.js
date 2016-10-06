// Example of different ways to call a function and prototype chains

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function(point) {
		return Math.sqrt( (this.x - point.x) * (this.x - point.x)
				+ (this.y - point.y) * (this.y - point.y) );
	};
	return 0;	
};

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

var add1 = function(p1, p2) {
	return new Point(p1.x + p2.x, p1.y + p2.y);
};

var add2 = function(p1, p2) {
	var res = Object.create(this);
	res.x = p1.x + p2.x;
	res.y = p1.y + p2.y;
	return res;
};

var p1 = new Point(2, 3);
var p2 = new Point(5, 7);

document.writeln( "Distance between p1 and p2 = " + p1.dist(p2) );
var res1 = add1(p1, p2);
console.log(res1);
document.writeln( "Add1 of p1 and p2 = res1 =  " + res1 ); 

var Points = [ p1, p2 ];
var res2 = add2.apply( Object.getPrototypeOf(p1), Points);
console.log(res2); 
document.writeln("Add2 of p1 and p2 = res2 = " + res2);

var res3 = add2.call( Object.getPrototypeOf(p1), p1, p2 );
console.log(res3); 
document.writeln("Add2 of p1 and p2 = res3 = " + res3);



