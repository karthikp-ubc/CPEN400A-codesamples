## Question

Consider a *pure* function like `fibonacci` shown below. Pure functions always return the same result when called with the same arguments, which means we can cache the result of the function call and return the value from the cache when called again with the same arguments. Your task is to create a function `makeCachedFunction` that takes in a function with a single argument (like the `fibonacci` function) and returns another version of the given function, which caches the results of the call. On a subsequent call with the same argument, this function should return the result from the cache. You are NOT allowed to add any global variables to the program or else you’ll get 0 points.

**NOTE:** We show below an example of `makeCachedFunction` ’s invocation with the `fibonacci` function. Your solution should be compatible with this invocation or else no points will be awarded.

```javascript
var cachedFibonacci = makeCachedFunction(fibonacci);

cachedFibonacci(39);    // Should be pretty slow
cachedFibonacci(39);    // Should be very quick (return cached result)
cachedFibonacci(41);    // Should be pretty slow
cachedFibonacci(41);    // Should be very quick (return cached result)
cachedFibonacci(39);    // Should be very quick (return cached result)
cachedFibonacci(41);    // Should be very quick (return cached result)
```

---

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', (chunk) => {
    inputString += chunk;
});
process.stdin.on('end', function() {
    let tokens = inputString.split(' ');
    let funcName = tokens[0];
    let funcArg = parseInt(tokens[1]);
    let funcReturnVal = parseInt(tokens[2]);
    
    function ack(m, n) {
        return m === 0 ? n + 1 : ack(m - 1, n === 0  ? 1 : ack(m, n - 1));
    }
    
    const testFuncs = {
        fibonacci: function fibonacci(x){
            if (x < 2) return 1;
            else return fibonacci(x - 1) + fibonacci(x - 2);
        },
        ackermann2: function ackermann2(x){
            return ack(2, x);
        },
        ackermann3: function ackermann3(x){
            return ack(3, x);
        },
        wasteful: function wasteful(x){
            let i = 0;
            while (i < 1000000000){ i ++ };
            return x;
        },
        random: function random(){
            return Math.random();
        }
    };
    
    if (funcName !== 'random') runTest(testFuncs[funcName], funcArg, funcReturnVal);
    else runRandomTest(testFuncs[funcName]);
});

/*
 * Complete the 'makeCachedFunction' function below.
 *
 * The function accepts Function func as parameter.
 * The function should return a Function.
 */

function makeCachedFunction(func) {

}

function runTest(testFunc, testArg, testReturnVal) {
    
    let cacheEnabledFunc = makeCachedFunction(testFunc);
    
    // call cacheEnabledFunc first time
    let timestamp = Date.now();
    let result1 = cacheEnabledFunc(testArg);
    
    // check result value and measure elapsed time
    let elapsed1 = Date.now() - timestamp;
    
    // call cacheEnabledFunc second time
    timestamp = Date.now();
    let result2 = cacheEnabledFunc(testArg);
    
    // check result value and measure elapsed time
    let elapsed2 = Date.now() - timestamp;
    
    process.stdout.write(String(result1 === testReturnVal
                                && result2 === testReturnVal
                                && elapsed2 < 5));
}

function runRandomTest(randFunc){
    let cacheEnabledFunc = makeCachedFunction(randFunc);
    
    let result1 = cacheEnabledFunc();
    let result2 = cacheEnabledFunc();
    
    process.stdout.write(String(result1 === result2));
}
```

## Solution

```javascript
function makeCachedFunction(func) {
    var cache = {};
    return function (x){
        if (!cache[x]) {
            cache[x] = func(x);
        }
        return cache[x];
    }
}
```