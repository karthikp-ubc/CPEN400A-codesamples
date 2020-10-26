// Example of how to use a generator in a for loop

function* listIterator(items) {
    console.log("Initializing generator with list items");
    for (var i = 0; i < items.length; ++i) {
        yield( items[i] );
    }
    return i;    // Return the number of elements iterated over
}

// List of names to iterate over
names = ["John", "Linda", "James", "Xavier", "Melanie"];

// First, create a generator with the list of names

console.log("Starting iteration method 1");
var lg = listIterator(names);
var l;

// The ugly way of iterating with the generator, but gets final value
while ( !(l = lg.next()).done) {
    console.log("Next: " + l.value);
}
console.log("Number of elements iterated over " + l.value);

console.log("Starting iteration method 2");
var lg_redux = listIterator(names);

// The cleaner way to do the iteration, but can't get final value
for (var l of lg_redux) {
    console.log("Next: " + l);
}
console.log("Number of elements iterated over " + l.value);

