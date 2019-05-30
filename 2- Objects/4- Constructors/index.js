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
    console.log(this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const another = new Circle(1); // must use new; 1) creates an empty object 2) sets this to equal empty object.
another.draw();

const other = Circle(1);
