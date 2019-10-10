// Class activity on slide 25

// Concatenate all the text in the subtree of a node
var concatenateSubtree = function(node) {
	var result = "";
	if (! node) return result;
	if (node.nodeType == 3) {
		result = result + node.nodeValue;
	} else {
		var cn = node.childNodes;
		if (cn) {
			for (var i=0; i<cn.length; i++) {
				result = result + concatenateSubtree(cn[i]);
			}
		}
	};
	return result;
};

// Concatenate all the textnodes in the siblings of text node with the ID= id
var concatenateSiblings = function(id, includeSubtrees) {
	var node = document.getElementById(id);
	var result = "";
	var parent = node.parentNode;
	if (parent && parent.childNodes) {
		var siblings = parent.childNodes;
		for (var i=0; i< siblings.length; i++) {
			var sibling = siblings[i];
			if (sibling && sibling.nodeType == 3) {
				result = result + sibling.nodeValue;
			}
			if (includeSubtrees) {
				result = result + concatenateSubtree(sibling);
			}
		}
	}
	return result;
};

window.onload = function() {
	// Concatenate the siblings of text nodes rooted at node one
	var str = concatenateSiblings("one", true);
	console.log(str);
};
