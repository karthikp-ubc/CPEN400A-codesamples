// Example of how to use a generator in a for loop

function* listIterator(items) {
    console.log("Initializing generator with list items");
    for (var i = 0; i < items.length; ++i) {
        yield( items[i] );
    }
    throw {value: i};    // Uses an exception for the number of elements iterated over
}

// List of names to iterate over
names = ["John", "Linda", "James", "Xavier", "Melanie"];

// First, create a generator with the list of names

console.log("Starting iteration method 2");
var lg_redux = listIterator(names);

// The cleaner way to do the iteration, but can't get final value
try {
    for (var l of lg_redux) {
        console.log("Next: " + l);
    }
}
catch (e) {
    console.log("Number of elements iterated over " + e.value);
}
