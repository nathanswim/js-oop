
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method
    draw() {
        console.log('draw');
    }

    // Static method 
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);

    }
}

const circle =  Circle.parse('{ "radius": 13}');

console.log(circle);


