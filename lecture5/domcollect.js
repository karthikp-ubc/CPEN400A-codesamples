
// Get the elements of a certain tag rooted at the node 'id'
var getElementsRootedAt = function(tagName, id) {
	var el = document.getElementById(id);
	if (el==null) return null;
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
		if (cn) {
			for (var i=0; i<cn.length; i++) {
				found = found || search(cn[i], text);
			}
		}	
	};
	return found;	
};

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

// Solution to class activity on Slide 21
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
	// Find all div elements rooted at the DOM with id=one	
	var s = getElementsRootedAt("div", "one");
	console.log(s);

	// Find the text "is" starting from node one
	var found = search(document.getElementById("one"), " is "); 	
	console.log(found);	

	// Concatenate the siblings of text nodes rooted at node one
	var str = concatenateSiblings("one", true);
	console.log(str);
};
