	
// Solution to the class activity for the filter function is below;
var filter = function( array, fn ) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
	    var element = array[i];
            if (fn(element)) result.push(element); 
        }
        return result;
};

var lesserThan = function(a, b) { 
		return (a < b) ? true:false; 
	}

var greaterThan5 = lesserThan.bind(null, 5);

var a = [ 1, 3, 10, 8, 2, 7, 6 ];
document.writeln(a);

var c = filter( a, greaterThan5);
document.writeln(c);
	
