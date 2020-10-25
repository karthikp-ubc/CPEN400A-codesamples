// Example of how to use a generator in a for loop

function* listIterator(items) {
    console.log("Initializing generator with list items");
    for (var i = 0; i < items.length; ++i) {
        yield( items[i] );
    }
    // Reached end of list, so do nothing
}

// List of names to iterate over
names = ["John", "Linda", "James", "Xavier", "Melanie"];

// First, create a generator with the list of names

console.log("Starting iteration method 1");
var lg = listIterator(names);
var l;
// The ugly way of iterating with the generator
while ( !(l = lg.next()).done) {
    console.log("Next: " + l.value);
}
console.log("Reached end of list");

console.log("Starting iteration method 2");
var lg_redux = listIterator(names);
// The cleaner way to do the iteration
for (var l of lg_redux) {
    console.log("Next: " + l);
}
console.log("Reached end of list");
