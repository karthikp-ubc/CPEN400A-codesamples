// Simple generator to generate a random sequence of numbers

function* generateRandom(max) {
    console.log("Setting up generator with max value" + max);
    while (true) {
        console.log("Generating random no. ")
        var l = Math.round(Math.random() * max);
        yield l;
    }
    // Control should never reach here
    assert(false);
}

var rg = generateRandom(10);
for (var i=0; i<10; ++i) {
    var r = rg.next();
    console.log(i + " : " + r.value);
}