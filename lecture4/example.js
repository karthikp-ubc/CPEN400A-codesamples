// Example for setTimeout and clearTimeout

var timeoutHandler = function(message) {
	return function( ) {
		alert(message);
	}	
}

s = undefined;

var setupTimeout = function( ) {
	s = setTimeout( timeoutHandler("hello"), 5000 )
}

var cancelTimeout = function( ) {
	if (s != undefined) {
		clearTimeout(s)
		alert("Timeout cleared")
	}
}

