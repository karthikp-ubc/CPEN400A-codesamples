// Example of different ways to call a function and prototype chains
// Added solution to class activity on slide 21 and replaced new with Point.new

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function(point) {
		return Math.sqrt( (this.x - point.x) * (this.x - point.x)
				+ (this.y - point.y) * (this.y - point.y) );
	}	
};

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

Point.new = function() {
	var newObj = Object.create(this.prototype);
	this.apply(newObj, arguments);
	return newObj;	
};

var add = function(p1, p2) {
	console.log(this);
	return Point.new(p1.x + p2.x, p1.y + p2.y);
};

var add2 = function(p1, p2) {
	var res = Object.create(this);
	res.x = p1.x + p2.x;
	res.y = p1.y + p2.y;
	return res;
};

var p1 = Point.new(2, 3);
var p2 = Point.new(5, 7);
console.log(p1);
console.log(p2);
console.log(Object.getPrototypeOf(p1) == Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(p1).constructor);

document.writeln( "Distance between p1 and p2 = " + p1.dist(p2) );
// var res1 = add(p1, p2);

var Points = [ p1, p2 ];
var res1 = add.apply(Object.getPrototypeOf(p1), Points);

console.log(res1);
document.writeln( "Add of p1 and p2 = res1 =  " + res1 ); 

var res2 = add2.apply( Object.getPrototypeOf(p1), Points);
console.log(res2); 
document.writeln("Add2 of p1 and p2 = res2 = " + res2);

var res3 = add2.call( Object.getPrototypeOf(p1), p1, p2 );
console.log(res3); 
document.writeln("Add2 of p1 and p2 = res3 = " + res3);


