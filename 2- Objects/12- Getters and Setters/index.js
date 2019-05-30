function Circle(radius) {
    console.log(this);
    this.radius = radius;

    // we want to hide this property ...
    let defaultLocation = { x: 0, y: 0 };

    // ... and hide this function
    let computeOptimumLocation = function() {
        // do some magic here.
    };

    this.draw = function() {
        let x, y;
        computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();
