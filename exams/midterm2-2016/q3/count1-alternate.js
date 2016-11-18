// Alternate Solution to part 3A

function countNodes(IDs) {
	
	var counts = [];
	for (var i=0; i<IDs.length; i++) {
		var ID = IDs[i];
		var e = document.getElementById(ID);
		if (! e) 
			counts[i] = undefined;		
		else
			counts[i] = e.getElementsByTagName("*").length + 1;
	}
	return counts;
}

window.onload = function() {
	var IDs = ["one", "two", "three", "four", "btn"];
	var counts = countNodes(IDs);
	console.log(IDs);
	console.log(counts);
}
