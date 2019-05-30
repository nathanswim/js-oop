function Circle(radius) {
    console.log(this);
    this.radius = radius;

    // we want to hide this property ...
    this.defaultLocation = { x: 0, y: 0 };

    // ... and hide this function
    this.computeOptimumLocation = function() {
        // do some magic here.
    };

    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);
