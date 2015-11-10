var Calculator = function() { 
	this.lastResult = 0;
	this.sum = function(a, b) {
		this.lastResult = a + b;
		return this.lastResult;
	};
	this.product = function(a, b) {
		this.lastResult = a * b;
		return this.lastResult;
	};
	this.add = function(a) {
		this.lastResult = this.lastResult + a;
		return this.lastResult;
	};
	this.multiply = function(a) {
		this.lastResult = this.lastResult * a;
		return this.lastResult;
	};
	this.toString = function() {
		return "lastResult : " + this.lastResult;
	};
};
 
module.exports = Calculator;
