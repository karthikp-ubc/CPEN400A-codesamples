var Person = function(firstName, lastName, gender) {
	this.firstName = firstName;	
	this.lastName = lastName;
	this.gender = gender;
	this.name = function() { // this is how you add a method 
		return this.firstName + " " + this.lastName;
	}
}

var p1 = new Person("John", "Smith", "Male");
console.log( p1.firstName );
console.log( p1["lastName"] );
console.log( p1.name );

Person.prototype.print = function() { // this is a method of the prototype
	console.log( this.name() + " " + this.gender );
}

console.log(p1);
console.log(Person.prototype);
var proto1 = Object.getPrototypeOf(p1);
console.log(proto1);
console.log(Object.getPrototypeOf(proto1));

var p2 = new Person("Linda", "James", "Female");
console.log(p2);
var proto2 = Object.getPrototypeOf(p2);
console.log(proto2);

p1.print();
p2.print();

var Employee = function(firstName, lastName, gender, title) {
	Person.call(this, firstName, lastName, gender);
	this.title = title;	
};

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

Employee.prototype.print = function() {
	console.log( this.name() + " " + this.gender + " " + this.title );
}

var e1 = new Employee("XYZ", "ABC", "Male", "Manager");
console.log( Employee.prototype );
console.log( Object.getPrototypeOf(e1) );

// Print all the people and the employees
e1.print();
p1.print();
p2.print();

// Employee.prototype = Object.prototype;

// Check the instances and the prototypes
console.log(e1 instanceof Employee);
console.log(e1 instanceof Person);
console.log(e1 instanceof Object);

console.log(p1 instanceof Employee);
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);

console.log(p2 instanceof Employee);
console.log(p2 instanceof Person);
console.log(p2 instanceof Object);

console.log( "firstName" in p1 );
console.log( "lastName" in p1 );
console.log( "title" in p1 );

console.log( "firstName" in e1 );
console.log( "lastName" in e1 );
console.log( "title" in e1 );

console.log( p1.hasOwnProperty("firstName") );
console.log( p1.hasOwnProperty("lastName") );
console.log( p1.hasOwnProperty("print") );
console.log( e1.hasOwnProperty("firstName") );
console.log( e1.hasOwnProperty("lastName") );
console.log( e1.hasOwnProperty("print") );
