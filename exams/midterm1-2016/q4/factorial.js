// Function to calculate factorial both with and without memoization

function factorial(x) {
	if (x==0)
		return 1;
	else {
		return x * factorial(x-1);	
	}
}

function memfactorial() {
	var cache = {0:1};
	var fact = function(x) {
		var res = cache[x];
		if (typeof res != "undefined") {
			return res;
		} else {
		 	var temp = x * fact(x-1);
			cache[x] = temp;
			return temp;	
		}			
	};
	return fact;
}

	
console.log( "Fact(5) = " + factorial(5) );
var mfact = memfactorial();
console.log( "Memo-Fact(5) = " + mfact(5) );
console.log( "Memo-Fact(6) = " + mfact(6) );
		


