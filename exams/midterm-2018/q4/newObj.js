// Example of standalone newObj function

function Point(x, y) {
	this.x = x;
	this.y = y;
};

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

var newObj = function(obj, args) {
	var proto = Object.getPrototypeOf(obj);
	var res = Object.create(proto);
	proto.constructor.apply(res, args);
	return res;
};

var p1 = new Point(2, 3);
var p2 = new Point(5, 7);
var p3 = newObj(p1, [4, 2]);
var p4 = new Point(4, 2)

console.log(p1);
console.log("p1 = " + p1);
console.log(p2);
console.log("p2 = " + p2);
console.log(p3);
console.log("p3 = " + p3);
console.log(p4);
console.log("p4 = " + p4);


