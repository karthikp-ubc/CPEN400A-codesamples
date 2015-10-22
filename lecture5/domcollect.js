
// Get the elements of a certain tag rooted at the node 'id'
var getElementsRootedAt = function(tagName, id) {
	var el = document.getElementById(id);
	var t = el.getElementsByTagName(tagName);
	return t;
};

// Search for a text in the DOM-subtree rooted at node 
// Only textnodes are searched here. Return true if found
var search = function(node, text) {
	var found = false;
	if (node.nodeType == 3) {
		if (node.nodeValue == text) found = true;
	} else {
		var cn = node.childNodes;
		for (var i=0; i<cn.length; i++) {
			found = found || search(cn[i], text);
		}	
	};
	return found;	
};

// Concatenate all the textnodes in the DOM-subtree rooted at id
var concatenateSiblings = function(id) {
	var node = document.getElementById(id);
	var result = "";
	var parent = node.parentNode;
	var siblings = [];
	if (parent) {
		siblings = parent.childNodes;
		for (var i=0; i< siblings.length; i++) {
			var sibling = siblings[i];
			if (sibling && sibling.nodeType == 3) {
				console.log(sibling);
				result = result + sibling.nodeValue;
			}
		}
	}
	return result;
};

window.onload = function() {
	// Find all div elements rooted at the DOM with id=one	
	var s = getElementsRootedAt("div", "one");
	console.log(s);

	// Find the text "is" starting from node one
	var found = search(document.getElementById("one"), " is "); 	
	console.log(found);	

	// Concatenate the text nodes rooted at node one
	var str = concatenateSiblings("four");
	console.log(str);
};
