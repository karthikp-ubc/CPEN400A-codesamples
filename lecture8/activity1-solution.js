class Thing {
    // Solution 
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

var thing = new Thing("thing-0");
thing.printStatus();	// prints: thing-0 (off)
thing.powerOn();
thing.printStatus();	// prints: thing-0 (on)
thing.powerOff();
thing.printStatus();	// prints: thing-0 (off)
