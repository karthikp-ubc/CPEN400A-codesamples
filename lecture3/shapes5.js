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

var add = function(p1, p2) {
	return new Point(p1.x + p2.x, p1.y + p2.y);
};

var add2 = function(p1, p2) {
	var res = Object.create(this);
	res.x = p1.x + p2.x;
	res.y = p1.y + p2.y;
	return res;
};

var addAll = function() {
	var p = Object.create(this);
	p.x = 0; p.y = 0;
	for (var i = 0; i < arguments.length; i++) {
		var point = arguments[i];
		if (Object.getPrototypeOf(point)!=this) {
			throw { name: TypeError, 
				message: "Object " + point + " is not of type point", 
				result: p
			};	
		}
		p.x += point.x;
		p.y += point.y;
	}
	return p
};

var p1 = new Point(2, 3);
var p2 = new Point(5, 7);
console.log(Object.getPrototypeOf(p1) == Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(p1).constructor);

document.writeln( "Distance between p1 and p2 = " + p1.dist(p2) );
var res1 = add(p1, p2);
console.log(res1);
document.writeln( "Add of p1 and p2 = res1 =  " + res1 ); 

var Points = [ p1, p2 ];
var res2 = add2.apply( Object.getPrototypeOf(p1), Points);
console.log(res2); 
document.writeln("Add2 of p1 and p2 = res2 = " + res2);

var res3 = add2.call( Object.getPrototypeOf(p1), p1, p2 );
console.log(res3); 
document.writeln("Add2 of p1 and p2 = res3 = " + res3);

var res4 = addAll.call( Object.getPrototypeOf(p1), p1, p2, res1, res2, res3);
console.log(res4); 
document.writeln("AddAll of p1,p2, res1, res2 and res3 = res4 = " + res4);

try {
	var res5 = addAll.call( Object.getPrototypeOf(p1), p1, p2, "notapoint", res2, res3);
} catch (e) {
	document.writeln(e.name + " : " + e.message);
	res5 = e.result;
};
console.log(res5); 
document.writeln("AddAll of p1,p2, res1, res2 and res3 = res5 = " + res5);


