function Circle(radius) {
    console.log(this);
    this.radius = radius;

    // we want to hide this property ...
    let defaultLocation = { x: 0, y: 0 };

    this.draw = function() {
        console.log('draw');
    };

    // solution 1
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();

console.log(circle.getDefaultLocation());
console.log(circle.defaultLocation);

// circle.defaultLocation = 1; // returns error
circle.defaultLocation = { x: 1, y: 2 };

console.log(circle.defaultLocation);
