// Object.getPrototypeOf(myObj);
// myObj.__proto__ (parent of myObj)

// constructors also have a prototype property
function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);

let obj = {};
console.log(obj.__proto__);
console.log(Object.prototype); // these are both the same

let array = [];

console.log(array.__proto__);
console.log(Array.prototype);

console.log(circle.__proto__);
console.log(Circle.prototype);
