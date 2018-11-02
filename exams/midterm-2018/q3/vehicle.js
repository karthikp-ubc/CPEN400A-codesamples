// Example of inheritance
// Source: https://codeburst.io/javascript-inheritance-25fe61ab9f85

var Vehicle = function(name) {
	this.name = name;
}

Vehicle.prototype.start = function() {
	return this.name + " starting...";
}

var Car = function(name) {
  	Vehicle.call(this,name);
}

Car.prototype = new Vehicle();
Car.prototype.constructor = Car;

Car.prototype.run = function() {
  	return "Car "+ this.start();
};

var c1 = new Car("Honda");
var c2 = new Car("Toyota");

console.log( c1.run() );
console.log( c2.run() );

console.log( Object.getPrototypeOf(c1) == Object.getPrototypeOf(c2) );
console.log( Object.getPrototypeOf(c1) == Vehicle.prototype );
console.log( c1 instanceof Vehicle );
console.log( c2 instanceof Car );

Vehicle.prototype = new Car();

console.log( Object.getPrototypeOf(c1) == Object.getPrototypeOf(c2) );
console.log( Object.getPrototypeOf(c1) == Vehicle.prototype );
console.log( c1 instanceof Vehicle );
console.log( c2 instanceof Car );
