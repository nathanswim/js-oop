/* BEFORE: Instance properties and methods

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1);
console.log(c2);

c1.draw();
*/

/* AFTER: Prototype Members */
function Circle(radius) {
    this.radius = radius;
    this.move = function() {
        //this.draw();
        console.log('move');
    };
}

Circle.prototype.draw = function() {
    this.move();
    console.log('draw');
};

Circle.prototype.toString = function() {
    return 'Circle of radius ' + this.radius;
};

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(Circle.prototype === c1.__proto__);

console.log(c1);
console.log(c2);

c1.draw();
console.log(c1.toString());
