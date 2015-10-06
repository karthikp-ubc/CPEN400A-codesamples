// Simple Adder functions to illustrate closures
function Adder(val) {
	var value = val;
	return function(inc) {
		value = value + inc;
		return value;
	}
};

var f = Adder(5);
document.writeln( f(3) );
document.writeln( f(5) );

// Counter closure returning an object
function Counter(initial) {
	var val = initial;
	return {	
		increment : function() { val += 1; },
		reset: function() { val = initial; },
		get: function() { return val; }
	};
};

var f = Counter(5), g = Counter(10);
f.increment();
g.increment();
f.reset();
f.increment();
g.increment();
document.writeln( f.get() + "," + g.get() );

// Closure that keeps a pointer to the enclosing function itself
function MultiCounter(initial) {
	var that = this;
	var val = [];	
	this.init = function() {
		val = [];
		for (var i=0; i<initial.length; i++) {
			val.push(  initial[i] );
		};
	};
	this.init();
	return {
		increment: function(i) { val[i] += 1; },
		resetAll: function() { that.init(); },
		getValues: function() { return val; }
	};
};

var m = MultiCounter( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.increment(0);
m.resetAll();
m.increment(1);
console.log( m );
console.log( m.getValues() );

// This example is WRONG ! Do NOT use Closures this way !
function MakeCounters(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
		var val = i;
		counters[i] = {
			increment: function() { val++; },
 			get: function() { return val; },
			reset: function() { val = i; }
		}
	}
	return counters;
};
var m = MakeCounters(10);
for (var i=0; i<10; i++) {
        document.writeln("Counter[ " + i + "] = " + m[0].get(i));
}
	
// Solution to the class acitvity correcting this will be posted after class

// This is an example of a higher-order function
var map = function( array, fn ) {
	// Applies fn to each element of list, returns a new list
	var result = [];
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		var args = [ element ];
		result.push( fn.apply(null, args) );
	}
	return result;
};

var l = [3, 1, 5, 7, 2];
document.writeln( map(l, function(num) { return num + 10; }) );

var add = function(a, b) {
	return a + b;
};

// This is an example of function currying
var add10 = add.bind(null, 10); 
document.writeln( map(l, add10) )

// Solution to the class activity for the filter function is below;
var filter = function( array, fn ) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
                var element = array[i];
                var args = [ element ];
                if (fn.apply(null, args) ) result.push(element); 
        }
        return result;
};

var lesserThan = function(a, b) { return (a < b) ? true:false; } 
var greaterThan5 = lesserThan.bind(null, 5);

var a = [ 1, 3, 10, 8, 2, 7, 6 ];
document.writeln(a);
var c = filter( a, greaterThan5);
document.writeln(c);
	
