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
	var btn = document.getElementById("btn");

	div1.addEventListener("click", bubbleHandler("div1"), false);
	div2.addEventListener("click", bubbleHandler("div2"), false);
	div3.addEventListener("click", bubbleHandler("div3"), false);
	div4.addEventListener("click", bubbleHandler("div4"), false);
	btn.addEventListener("click", bubbleHandler("btn"), false);

	div1.addEventListener("click", captureHandler("div1"), true);
	div2.addEventListener("click", captureHandler("div2"), true);
	div3.addEventListener("click", captureHandler("div3"), true);
	div4.addEventListener("click", captureHandler("div4"), true);
	btn.addEventListener("click", captureHandler("btn"), true);
};
