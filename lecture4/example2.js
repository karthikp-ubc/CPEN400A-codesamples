// Example for setInterval and clearInterval

var intervalHandler = function(message) {
	return function( ) {
		alert(message);
	}	
}

s = undefined;

var setupInterval = function( ) {
	s = setInterval( intervalHandler("hello"), 1000 )
}

var cancelInterval = function( ) {
	if (s != undefined) {
		clearInterval(s)
		alert("Interval cleared")
	}
}

