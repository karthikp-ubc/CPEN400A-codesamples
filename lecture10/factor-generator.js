// Generate all the factors of a given number in ascending order until that number
// Recusrive implementation

function *factorGen(num) {
    if (num<=0) throw("number must be > 0");
    // It's sufficient to go until cieling(n/2)
    for (var i=1; i<(num/2 + 1); ++i) {
        if (num % i == 0) yield i;
    } 
    if (num>1) yield num;
}

var fg = factorGen(1000);
try {
    for (x of fg) {
        console.log("Factor: " + x);
    }
} catch(e) {
    console.log("Caught exception : " + e);
}