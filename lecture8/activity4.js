class Thing {
    constructor (id, user){
        this.id = id;
        this.owner = user;
        this.live = false;
    }

    printStatus (){
        console.log(this.id + ' (' + (this.live ? 'on':'off') + ')');
    }

    powerOn (){
        this.live = true;
    }

    powerOff (){
        this.live = false;
    }
}

class Sensor extends Thing {
    constructor (id, user){
        super(id, user);
        this.value = null;
    }

    printStatus (){
        console.log(this.id + ' (' + (this.live ? 'on':'off') + ') -> ' + this.value);
    }

    readValue (){
        if (this.live){
            this.value = Math.random();
            return this.value;
        }
        else return null;
    }
}

class Actuator extends Thing {
    constructor (id, user){
        super(id, user);
        this.value = null;
    }

    printStatus (){
        console.log(this.id + ' (' + (this.live ? 'on':'off') + ') <- ' + this.value);
    }

    writeValue (value){
        if (this.live) this.value = value;
    }
}

class User {
    constructor (username){
        this.id = username;
    }

    readAllSensors (things){
        var mine = things.filter(function(thing){
            return (thing.owner === this.id && thing instanceof Sensor);
        });
        var values = mine.map(function(thing){
            return thing.readValue();
        });
        return values;
    }
}

var alice = new User('alice');

var thermometer0 = new Sensor('thermometer-0', alice.id);
var thermometer1 = new Sensor('thermometer-1', null);
var thermometer2 = new Sensor('thermometer-2', alice.id);
var fan = new Actuator('fan-0', alice.id);

var things = [
    thermometer0,
    thermometer1,
    thermometer2,
    fan
];

thermometer0.printStatus();
thermometer1.printStatus();
thermometer2.printStatus();
fan.printStatus();

thermometer0.powerOn();
thermometer1.powerOn();
thermometer2.powerOn();
fan.powerOn();

var val0 = thermometer0.readValue();
var val1 = thermometer1.readValue();
var val2 = thermometer2.readValue();
fan.writeValue((val0 + val1 + val2)/3);

thermometer0.printStatus();
thermometer1.printStatus();
thermometer2.printStatus();
fan.printStatus();

// alice should read only thermometer 0 and 2
var values = alice.readAllSensors(things);
console.log(values);

