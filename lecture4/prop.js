// Code for class activity on Slide 

var bubbleHandler = function(name) {
	return function(e) {
		console.log("Bubble handle invoked on : " + name);
		console.log("Event target " + e.target);
	};
};

var captureHandler = function(name) {
	return function(e) {
		console.log("Capture handle invoked on : " + name);
		console.log("Event target " + e.target);
	};
	
}

window.onload = function() {
	var div1 = document.getElementById("one");
	var div2 = document.getElementById("two");
	var div3 = document.getElementById("three");
	var div4 = document.getElementById("four");
	var div5 = document.getElementById("five");
	var div6 = document.getElementById("six");
	var div7 = document.getElementById("seven");
	var btn = document.getElementById("btn");

	div1.addEventListener("click", bubbleHandler("div1"), false);
	div2.addEventListener("click", bubbleHandler("div2"), false);
	div3.addEventListener("click", bubbleHandler("div3"), false);
	div4.addEventListener("click", bubbleHandler("div4"), false);
	div5.addEventListener("click", bubbleHandler("div5"), false);
	div6.addEventListener("click", bubbleHandler("div6"), false);
	div7.addEventListener("click", bubbleHandler("div7"), false);
	btn.addEventListener("click", bubbleHandler("btn"), false);

	div1.addEventListener("click", captureHandler("div1"), true);
	div2.addEventListener("click", captureHandler("div2"), true);
	div3.addEventListener("click", captureHandler("div3"), true);
	div4.addEventListener("click", captureHandler("div4"), true);
	div5.addEventListener("click", captureHandler("div5"), true);
	div6.addEventListener("click", captureHandler("div6"), true);
	div7.addEventListener("click", captureHandler("div7"), true);
	btn.addEventListener("click", captureHandler("btn"), true);
};
