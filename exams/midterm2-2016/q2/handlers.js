var EventHandler = function(msg) {
	return function(e) {
		console.log(msg);
	}
}

window.onload = function() {
	var div1 = document.getElementById("one");
	var div2 = document.getElementById("two");
	var div3 = document.getElementById("three");
	var div4 = document.getElementById("four");
	div1.addEventListener("click", EventHandler("div1"), false);
	div3.addEventListener("click", EventHandler("div3"), true);	
	div2.addEventListener("click", EventHandler("div2"), false);	
	div4.addEventListener("click", EventHandler("div4"), true);	
}
