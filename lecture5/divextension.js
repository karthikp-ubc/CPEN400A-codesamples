// Solution to class activity in slide 34  

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
	console.log("Div1's count = " + div1.count);
	console.log("Div2's count = " + div2.count);
	console.log("Div3's count = " + div3.count);
	console.log("Div4's count = " + div4.count);
	console.log("Text1's count = " + text1.count);
};
