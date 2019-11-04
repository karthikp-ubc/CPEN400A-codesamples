var replaceGetElementById = function( id ) {
	var el = document.getElementById(id);
	if (el==null) return null;
	var nodeList = [];
	// Recursively traverse the DOM and add accessed
	var traverseNode = function(node) {
		if (node.id) {
			node.accessed = false;
			nodeList.push(node);
		}
		var children = node.childNodes;
		for (var i=0; i<children.length; i++) {
			var child = children[i];
			traverseNode(child);
		}
	}
	traverseNode(el);
	// Replace the document.getElementById with new function 
	var oldGeBId = document.getElementById;
	document.getElementById = function(id) {
		var el = oldGeBId.call(document, id);
		if (el!=null && el.accessed != "undefined")
			el.accessed = true;
		return el;
	}	
	return nodeList;
}

window.onload = function() {
	var nodes = replaceGetElementById("two");
	document.getElementById("two");
	document.getElementById("six");
	document.getElementById("one");
	document.getElementById("three");
	for(var i=0; i<nodes.length; i++) {
		var node = nodes[i];
		if (node.accessed) console.log("Accessed " + node.id);
	}
}
