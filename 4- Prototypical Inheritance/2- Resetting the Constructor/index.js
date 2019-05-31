function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw Circle');
};

function Square(size) {
    this.size = size;
}

Square.prototype.draw = function() {
    console.log('draw Square');
};

const s = new Shape();
const c = new Circle(1);

const c2 = new Circle.prototype.constructor(2);

console.log(s);
console.log(c);
console.log(c2);
