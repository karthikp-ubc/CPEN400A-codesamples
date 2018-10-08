// Solution to class activity on slide 40 

var newDiv = function(node, id) {
	var div = document.createElement("div");
	div.id = id;
	if (node) {
		if (node.parentNode) 
			node.parentNode.replaceChild(div, node);
		div.appendChild(node);
	} else {
		console.log("node is null");
	}
};

window.onload = function() {
	var div4 = document.getElementById("four");
	console.log(div4.childNodes);
	if (div4 && div4.childNodes.length >= 1) {
		var textNode = div4.getElementsByTagName("p")[0];
		newDiv( textNode, "five" );
	}
	console.log(div4.childNodes);
	console.log(div4);
};
