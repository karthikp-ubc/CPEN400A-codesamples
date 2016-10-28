var countNestedDivs = function(id) { 
	var n = document.getElementById(id);
	var count = 0;
	if (n) count = n.getElementsByTagName("div").length;
	return count;
};

window.onload = function() {
	console.log( countNestedDivs("div1") );
	console.log( countNestedDivs("div2") );
	console.log( countNestedDivs("div3") );
	console.log( countNestedDivs("div4") );
	console.log( countNestedDivs("div5") );
	console.log( countNestedDivs("table") );
};
