// Question 2A

function invoke(f, start, interval, end) {
	var count = 0;	
	function activate( ) {
		count += interval;
		f();
		if (! end || start + count < end) {
			setTimeout(activate, interval);
		}
	}
	setTimeout(activate, start);
} 

var setup = function() {
	console.log("Calling invoke ");		
	var foo = function() { 
		console.log("time: " + Date.now()); 
	}
	invoke( foo,
		 2000,	// start 
		 1000 	// interval
		 // 10000	// end
	);
} 
