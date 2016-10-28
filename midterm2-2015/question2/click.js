// Begin javaScript code

var ClickHandler = function(msg) {
	return function() {
		console.log(msg + " clicked");
	}
};

window.onload = function() {
	console.log("document loaded");
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");
	div1.addEventListener("click", ClickHandler("div1-a"), false);
	div2.addEventListener("click", ClickHandler("div2-a"), false);
	div3.addEventListener("click", ClickHandler("div3-a"), false);
	div1.addEventListener("click", ClickHandler( "div1-b"), true);
	div2.addEventListener("click", ClickHandler( "div2-b"), true);
	div3.addEventListener("click", ClickHandler( "div3-b"), true);
};
