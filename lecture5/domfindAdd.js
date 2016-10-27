
// Recursively walks the DOM subtree rooted at n,
// Adding any node that matches returns true for
// to the document fragment frag (or DOM node)
function collectNodes(n,  matches, frag) {
	if (n) {
		console.log("Entering: " ); console.log(n);
		var c = n.firstChild;
		while (c != n.lastChild ) {	
			// NOTE: Moving it to the fragment makes it forget its next sibling
			// So make sure we remember it for it to be updated later
			var next = c.nextSibling;
			if ( matches.call(null, c) ) {
				console.log("Appending :"); console.log(c.tagName);
				frag.appendChild(c);
			} else {
				// No need to recurse into subtrees if the parent node matches
				console.log("Recursing into "); console.log(c);
				collectNodes(c, matches, frag);
				c = c.nextSibling;
			}
			c = next;
		}
		console.log("Leaving :"); console.log(n);
	}
};

// Find and add nodes satisfying a given critereon
// as children of node n's parent  (if it has one)
function findAndAdd(n, matches) {
	if (! n || ! n.parentNode) return;
	if (! matches) matches = function(n) { return true; };
	var df = document.createDocumentFragment();
	collectNodes(n, matches, df);
	// for (var i=0; i<df.childNodes.length; i++) {
	//	console.log(df.childNodes[i]);
	// }
	n.parentNode.appendChild(df);
};

window.onload = function() {
	var finder = function(tagName, node) {
		return (node.nodeName==tagName);
	};
	var paraFinder = finder.bind(null, "P");	// This is an example of currying
	findAndAdd(document.getElementById("one"), paraFinder);
	console.log(document.body);
};
