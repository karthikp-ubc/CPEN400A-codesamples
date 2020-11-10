// Simple generator to generate an infinite sequence of numbers from a, with step size b

function* generateSequence(a, b) {
    console.log("Setting up generator");
    var num = a;
    while (true) {
        console.log("Generating next number ")
        yield num;
        num = num + b;
    }
    // Control should never reach here
    assert(false);
}

var sg = generateSequence(100, 10);
for (var i=0; i<20; ++i) {
    var s = sg.next();
    console.log(i + " : " + s.value);
}