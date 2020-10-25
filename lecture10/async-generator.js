// Solution to class activity: Executes a set of asynchronous functions using
// a generator to remember the next function to be executed (with a specified delay)

function* executeAsync(functions, delay) {
    for (var i=0; i<functions.length; ++i) {
        var func = functions[i];
        yield new Promise( (resolve, reject) => {
            var arg = i;
            setTimeout(() => { 
                resolve( func(arg) ); 
            }, delay * i);
        })
    }
}

var funcs = [];
for (var i = 0; i<10; i++) {
    funcs.push( (i) => { return i; } );
}
var execGen = executeAsync(funcs, 1000);
for (eg of execGen) {
    eg.then( (result) => console.log("resolved " + result) 
        ).catch( (err) => console.log("error " + err));
}