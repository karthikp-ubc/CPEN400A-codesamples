function repeatAsync(func, count, interval, done) {
    var c = 0, result = [];
    var timer = setInterval(function(){
        result.push(func());
        c ++;
        if (c === count) {
            clearInterval(timer);
            done(result);
        }
    }, interval);   
}