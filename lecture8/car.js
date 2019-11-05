class Car {
  constructor (name, power=1){
  	this.name = name;
   	this.power = power;
	this.velocity = 0;
	console.log("Called car constructor");
  }
  accelerate(fuel){
   	this.velocity += fuel * this.power;
  }
  print() {
	console.log(this.name);
  }
};

class RacingCar extends Car {
  constructor(name) {
	console.log("Calling racing car constructor");
	super("rc-" + name, 3.5);
	console.log("Finished racing car constructor");
  }
   
}; 

var myCar = new Car("Smart");
myCar.print();
myCar.accelerate(10);
console.log( "velocity = " + myCar.velocity );

var rcCar = new RacingCar("Smart");
rcCar.print();
rcCar.accelerate(1);
console.log( "velocity = " + rcCar.velocity );
