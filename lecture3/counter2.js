// Simple Adder functions to illustrate closures
function Adder(val) {
	var value = val;
	return function(inc) {
		value = value + inc;
		return value;
	}
};

var f1 = Adder(5);
console.log( f1(3) );
console.log( f1(5) );

var f2 = Adder(100);
console.log( f2(2) );
console.log( f2(3) );

console.log( f1(1) );

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
console.log( f.get() + "," + g.get() );

// Closure that keeps an array of counters
function MultiCounter(initial) {
	var val = [];	
	var init = function() {
		val = [];
		for (var i=0; i<initial.length; i++) {
			val.push(  initial[i] );
		};
	};
	init();
	return {
		increment: function(i) { val[i] += 1; },
		resetAll: function() { init(); },
		getValues: function() { return val; }
	};
};

var m = MultiCounter( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.resetAll();
m.increment(0);
m.increment(1);
console.log( m );
console.log( m.getValues() );

// This solves the problem, but adds additional fields to the counters object 
function MakeCounters(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
		counters[i] = {
			val : i,
			initial : i,
			increment: function() { this.val++; },
 			get: function() { return this.val; },
			reset: function() { this.val = this.initial; }
		}
	}
	return counters;
};


var m = MakeCounters(10);
for (var i=0; i<10; i++) {
	console.log(m[i]);
        document.writeln("Counter[ " + i + "] = " + m[i].get());
}
