function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    };
}

// prototype members
Circle.prototype.draw = function() {
    console.log('draw');
};

const c1 = new Circle(1);

// only returns instance memebers
console.log(Object.keys(c1));

// returns all members (instance + prototype)
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));
