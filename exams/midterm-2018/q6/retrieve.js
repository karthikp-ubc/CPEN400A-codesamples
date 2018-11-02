var retreive = function(ID) {
	var root = document.getElementById(ID);
	if (root == null) return;
	var getText = function(n) {	
		if (n.nodeType == 3) return n.nodeValue;
		var res = "";
		for (var i=0; i<n.childNodes.length; i++) 
			res = res + getText( n.childNodes[i] );
		return res;
	}

	return getText(root);
}

window.onload = function() {
	console.log("Window loaded");	
	console.log( "One: " + retreive("one") );
	console.log( "Two: " + retreive("two") );
	console.log( "Three: " + retreive("three") );
	console.log( "Four: " + retreive("four") );
}
