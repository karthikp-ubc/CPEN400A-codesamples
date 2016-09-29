// Object creation using Object.create

var Person = {
	firstName: "John",
	lastName: "Smith",
	gender: "Male",
	print: function() {
		console.log("Person " + this.firstName + " " + this.lastName + " " + this.gender );
	}
};

var p = Object.create(Person);
p.print();
console.log(p);
console.log( Object.getPrototypeOf(p) );
console.log( p.prototype );	

var e = Object.create(p);
e.print = function() {
		console.log("Employee " + this.title);
		Person.print(); 
};
e.title = "manager";
e.print();
console.log(e);
console.log( Object.getPrototypeOf(e) );	
