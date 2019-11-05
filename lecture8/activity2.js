class Thing {
    constructor (id){
        this.id = id;
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

// implement Sensor class

// Implement Actuator class

// Driver code

var thermometer0 = new Sensor('thermometer-0');
var thermometer1 = new Sensor('thermometer-1');
var fan = new Actuator('fan-0');

thermometer0.printStatus();
thermometer1.printStatus();
fan.printStatus();

thermometer0.powerOn();
thermometer1.powerOn();
fan.powerOn();

var val1 = thermometer0.readValue();
var val2 = thermometer1.readValue();
fan.writeValue((val1 + val2)/2);

thermometer0.printStatus();
thermometer1.printStatus();
fan.printStatus();
