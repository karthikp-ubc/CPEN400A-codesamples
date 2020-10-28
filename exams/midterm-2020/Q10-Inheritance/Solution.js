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