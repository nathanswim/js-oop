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
