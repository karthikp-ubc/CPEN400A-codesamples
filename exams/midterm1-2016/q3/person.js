var Person = function(name, gender) {
	this.name = name;
	this.gender = gender;
}

var p = new Person("John", "Male");
var q = new Person("Jane", "Female");

Person.prototype.print = function() {
	console.log(this.name + " , " + this.gender);
}

p.print = function() { 
	console.log("hello " + this.name);
};


p.print();
q.print();
console.log( Object.getPrototypeOf(p) == Object.getPrototypeOf(q) );
console.log( Object.getPrototypeOf(q) == Person.prototype);

var Student = function(name, gender, studentNo) {
	Person.call(this, name, gender);
	this.studentNo = studentNo;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var s1 = new Student("Tom", "Male", "101");

console.log( Object.getPrototypeOf(s1) == Object.getPrototypeOf(p) );
console.log( p instanceof Person );
console.log( p instanceof Student );

Student.prototype = Person.prototype; 
var s2 = new Student("Tom", "Male", "101");

console.log( Object.getPrototypeOf(s2) == Object.getPrototypeOf(p) );
console.log( p instanceof Person );
console.log( p instanceof Student );
