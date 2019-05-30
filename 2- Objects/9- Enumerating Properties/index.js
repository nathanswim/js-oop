function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);

// enumerate properties and methods
console.log(`
####################################
### enumerate properties and methods`);
for (let key in circle) {
    console.log(key, circle[key]);
}
console.log();

// enumerate just properties
console.log(`
####################################
### enumerate just properties`);
for (let key in circle) {
    if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) console.log('Circle has a radius.');
