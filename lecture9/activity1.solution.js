// Prints the given ${time} after ${time} ms.
function resolveAfter(time){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log(time);
            resolve(time);
        }, time);
    });
}

// Make the program print 500, 1000, 1500 
resolveAfter(500)
.then(()=> resolveAfter(1000))
.then(()=> resolveAfter(1500));
