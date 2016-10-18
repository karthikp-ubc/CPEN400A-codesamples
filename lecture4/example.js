var myVar;
var i = 0;

function setupTimeout() {
    	i++;
	myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello " + i);
}

function cancelTimeout() {
	i = 0;
	clearTimeout(myVar);
}
