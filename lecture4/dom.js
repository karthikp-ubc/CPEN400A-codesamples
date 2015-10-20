


var popup = function(name, foo) {
	return function(e) {
		console.log(this);
		foo(name + " : " + e.type);
	}
};

var log = function(msg) {
	console.log(msg);
};

window.onload = function() {
	alert("document finished loading");
	var setupBtn = document.getElementById("reset");
	var runBtn = document.getElementById("increment");
	var doneBtn = document.getElementById("done");
	setupBtn.addEventListener( "click", popup("setup", log), false);
	runBtn.addEventListener( "click", popup("increment", log), false);
	doneBtn.addEventListener( "click", popup("done", log), false);
}
