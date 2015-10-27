var wrapGetElementById  = function() {
	var origGebid = document.getElementById;
	document.getElementById = function(id) {
		// console.log("Calling wrapper function with " + id);
		var node = origGebid.call(document, id);
		if (node && node["count"]!=undefined) {
			node.count = node.count + 1;
		}
		return node;
	}
};

var initDivElements = function() {
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {				
		var div = divs[i];
		div.count = 0;
		console.log(div.count);
	}
};

window.onload = function() {
	initDivElements();
	wrapGetElementById();
	var div1 = document.getElementById("one");
	var div2 = document.getElementById("two");	
	var div3 = document.getElementById("three");	
	var div4 = document.getElementById("four");	
	var div1 = document.getElementById("one");	
	var div1 = document.getElementById("one");	
	var div2 = document.getElementById("two");	
	var text1 = document.getElementById("five");	
	console.log(div1.count);
	console.log(div2.count);
	console.log(div3.count);
	console.log(div4.count);
	console.log(text1.count);
};
