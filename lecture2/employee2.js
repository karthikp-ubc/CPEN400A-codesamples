// Object creation using Object.create

var Person = {
	print: function() {
		console.log("Person " + this.firstName + " " + this.lastName + " " + this.gender );
	}
};

var p = Object.create(Person);
p.firstName = "Linda";
p.lastName = "James";
p.gender = "female";

p.print();
console.log(p);
console.log( Object.getPrototypeOf(p) );
console.log( p.prototype );	

var e = Object.create(Person, {
		firstName: {value: "John"},
		lastName: {value: "Smith"},
		gender: {value: "Male"}
	}
);
e.title = "manager";
e.print = function() {
		console.log("Employee " + this.title);
		Person.print.call(this); 
};

e.print();
console.log(e);
console.log( Object.getPrototypeOf(e) );	
