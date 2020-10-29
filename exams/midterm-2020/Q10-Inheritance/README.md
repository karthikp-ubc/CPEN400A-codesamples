## Question

Given the `Shape` class in the code provided (line 33\~42), implement a subclass `Rectangle` using construction functions.
 
In the `Rectangle` class, the constructor should *additionally* accept 2 arguments `width` and `height`, and assign them as `width` and `height` properties of the instance.

The `Rectangle` class should override the methods `area` and `perimeter`, returning the appropriate values. 

Additionally, implement the `translateMatchingRectangles` function, which accepts 4 arguments:
1. `rectangles` is an *array* of `Rectangles`,
2. `check` is a function that accepts a `Rectangle` object as the only argument and returns `true` or `false`, and
3. `x` and `y` are numbers indicating how much the `Rectangles` should be translated by.

The function should pick from the given array only those `Rectangles` that return `true` when the `check` function is called on them. Then, for each of the selected `Rectangles`, it should call the `translate` method with arguments `x` and `y`.

---

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', (chunk) => {
    inputString += chunk;
});
process.stdin.on('end', function() {
    let tokens = inputString.split(' ');
    let funcName = tokens[0];
    let funcArg1 = parseInt(tokens[1]);
    let funcArg2 = parseInt(tokens[2]);
    let funcArg3 = parseInt(tokens[3]);
    
    const checkFuncs = {
        all: _ => rect => true,
        areaGreaterThan: num => rect => rect.area() > num,
        areaLessThan: num => rect => rect.area() < num,
        perimeterGreaterThan: num => rect => rect.perimeter() > num,
        perimeterLessThan: num => rect => rect.perimeter() < num,
        distanceGreaterThan: num => rect => Math.sqrt(Math.pow(rect.x, 2), Math.pow(rect.y, 2)) > num,
        distanceLessThan: num => rect => Math.sqrt(Math.pow(rect.x, 2), Math.pow(rect.y, 2)) < num,
        isSquare: num => rect => rect.x === rect.y
    };
    
    let checkFunc = checkFuncs[funcName](funcArg1);
    
    runTest(checkFunc, funcArg2, funcArg3);
});

function Shape (x, y){
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function(){ return 0; }
Shape.prototype.perimeter = function(){ return 0; }
Shape.prototype.translate = function(x, y){
    this.x += x;
    this.y += y;
}

// TODO: Define the Rectangle class, inheriting Shape using prototypal inheritance (No ES6)

// TODO: Complete the 'translateMatchingRectangles' function below.
function translateMatchingRectangles(rectangles, check, x, y) {

}

function runTest(checkFunc, tX, tY) {
    const randInt = c => Math.floor(c * Math.random()) + 1;
    let vals = Array.from({ length: 10 }, (_, i) => ({ x: randInt(i), y: randInt(i), w: randInt(i), h: randInt(i) }));
    let originals = vals.map(args => new Rectangle(args.x, args.y, args.w, args.h));
    let rects = vals.map(args => new Rectangle(args.x, args.y, args.w, args.h));
    
    let isShape = rects.reduce((acc, r) => acc && r instanceof Shape, true);
    let valSet = rects.reduce((acc, r, i) => acc && r.x === vals[i].x && r.y === vals[i].y && r.width === vals[i].w && r.height === vals[i].h, true);
    let areaOK = rects.reduce((acc, r) => acc && r.area() === r.width * r.height, true);
    let periOK = rects.reduce((acc, r) => acc && r.perimeter() === 2 * (r.width + r.height), true);
    
    translateMatchingRectangles(rects, checkFunc, tX, tY);
    
    let translated = rects.reduce((acc, r, i) => acc && (checkFunc(originals[i]) ? r.x === originals[i].x + tX && r.y === originals[i].y + tY : r.x === originals[i].x && r.y === originals[i].y), true);
    
    rects.forEach((r, i) => { originals[i].x = r.x; originals[i].y = r.y; });
    
    translateMatchingRectangles(rects, checkFunc, tX, tY);
    
    let translated2 = rects.reduce((acc, r, i) => acc && (checkFunc(originals[i]) ? r.x === originals[i].x + tX && r.y === originals[i].y + tY : r.x === originals[i].x && r.y === originals[i].y), true);
    
    process.stdout.write(String(isShape && valSet && areaOK && periOK && translated && translated2));
}
```


## Solution

```javascript
function Rectangle(x, y, width, height){
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function(){
    return 2 * this.width + 2 * this.height;
}


function translateMatchingRectangles(rectangles, check, x, y) {
    rectangles.filter(check).forEach(function (rect){
        rect.translate(x, y);
    });
}
```