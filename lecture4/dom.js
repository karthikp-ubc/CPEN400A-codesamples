// Solution to class activity on Slide 32

var popup = function(name, foo) {
	return function(e) {
		console.log(this);
		foo(name + " : " + e.target);
	}
};

window.onload = function() {
	alert("document finished loading");
	var setupBtn = document.getElementById("reset");
	var runBtn = document.getElementById("increment");
	var doneBtn = document.getElementById("done");
	setupBtn.addEventListener( "click", popup("setup", alert), false);
	runBtn.addEventListener( "click", popup("increment", alert), false);
	doneBtn.addEventListener( "click", popup("done", alert), false);
}
