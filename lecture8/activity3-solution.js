var fib = function (n){
    if (n > 1) return fib(n-1) + fib(n-2);
    else return 1;
}

var fib2 = n => (n > 1) ? fib2(n-1) + fib2(n-2) : 1; 

console.log( fib(15) );
console.log( fib2(15) );


