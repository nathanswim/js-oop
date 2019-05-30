let x = {};
console.log('x', x);

let y = {};
console.log('y', y);

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// NOTE: the x.__proto__ property is deprecated.
