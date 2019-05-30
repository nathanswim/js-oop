// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const another = new Circle(1); // must use new; 1) creates an empty object 2) sets this to equal empty object.

console.log(Circle.name);
console.log(Circle.length); // number of arguments
console.log(Circle.constructor); // uses native constructor function to create the class object

const Circle1 = new Function(
    'radius',
    `
this.radius = radius;
this.draw = function() {
    console.log('draw');
};
`
);

const circle1 = new Circle1(1);

let circle2 = {};
Circle.call(circle2, 1); // first arg is "this".
let circle3 = {};
Circle.apply(circle3, [1]); // same as call, but args are passed as an array

console.log(another);
console.log(circle1);
console.log(circle2);
console.log(circle3);
