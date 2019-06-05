// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     };
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

let c = new Circle(25);
console.log('c', c);
