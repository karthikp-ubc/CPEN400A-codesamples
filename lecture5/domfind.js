// Exercise on slide 24 and class activity on slide 25

// Exercise on slide 24
// Search for a text in the DOM-subtree rooted at node 
// Only textnodes are searched here. Return true if found
var search = function(node, text) {
	var found = false;
	console.log(node);
	if (node.nodeType == 3) {
		console.log("Comparing text " + node.nodeValue);
		if (node.nodeValue == text) found = true;
	} else {
		var cn = node.childNodes;
		console.log("Recursing into children of node: " + cn.length);
		if (cn) {
			for (var i=0; i<cn.length; i++) {
				found = found || search(cn[i], text);
			}
		}	
	};
	return found;	
};

function find(node, text) {
	console.log("Finding text: " + text);
	var found = search(node, text);
	console.log("Found: " + found);
	console.log("================");
}	

window.onload = function() {
	var start = document.getElementById("one"); 	
	find(start, " This ");
	find(start, " his ");
};
