function concatenateChildren(node) {
	var result = "";
	if (node) {
		for (var i=0; i<node.childNodes.length; i++) {
			var c = node.childNodes[i];
			if (c.nodeType==3) {
				result = result + c.nodeValue;
			}	
		};	
	};
	return result;
};

function concatenateSubTree(node) {
	var result = "";
	if (! node) return result;
	if (node.type==3) 
		return node.nodeValue;
	result = concatenateChildren(node);
	for (var i=0; i<node.childNodes.length; i++) {
		var c = node.childNodes[i];
		if (c.nodeType!=3) {
			result = result + concatenateSubTree(c);
		}
	}
	return result;	
};

window.onload = function() {
	var node = document.getElementById("div1");
	var res = concatenateSubTree(node);
	console.log(res);
};
