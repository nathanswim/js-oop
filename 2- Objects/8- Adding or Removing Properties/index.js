function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);

// user.token = 'asdasdsd';

circle.location = { x: 1 };
circle['location2'] = { x: 2 };
console.log(circle);

const propertyName = 'location';
console.log(circle[propertyName]);
