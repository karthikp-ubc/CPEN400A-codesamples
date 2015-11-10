// Example of using modules in node.js

var Calculator = require("./calculate.js");
var calculator = new Calculator();
var c = calculator.sum(10,20);
console.log(c);
var d = calculator.add(30);
console.log(d);
var e = calculator.multiply(10);
console.log(e);
var f = calculator.product(100, 100);
console.log(f);
console.log(calculator);
