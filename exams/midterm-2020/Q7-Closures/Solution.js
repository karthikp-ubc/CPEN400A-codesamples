function makeCachedFunction(func) {
    var cache = {};
    return function (x){
        if (!cache[x]) {
            cache[x] = func(x);
        }
        return cache[x];
    }
}