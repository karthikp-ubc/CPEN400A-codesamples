// Solution to part 3B

function countNodes(IDs) {
	
	function getCount(element) {
		var count = 1;
		if (element.count) {
			count = element.count;
			console.log("Found " + element + " Returning "+ count);
		} else {
			var cn = element.childNodes;
			console.log("Element " + element + " has " + cn.length + " children");
			for (var i=0; i<cn.length; i++) {
				if (cn[i].nodeType != 3)
					count += getCount(cn[i]); 
			}
		}
		return count;
	}
	
	var counts = [];
	for (var i=0; i<IDs.length; i++) {
		var ID = IDs[i];
		console.log("Looking for element " + ID);	
		var e = document.getElementById(ID);
		if (! e) 
			counts[i] = undefined;		
		else {
			counts[i] = getCount(e);
			e.count = counts[i];
		}
	}
	return counts;
}

window.onload = function() {
	var IDs = ["btn", "four", "three", "two", "one"];
	var counts = countNodes(IDs);
	console.log(IDs);
	console.log(counts);
}
