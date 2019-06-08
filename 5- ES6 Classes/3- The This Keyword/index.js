const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
c.draw();

const draw = c.draw;
console.log(draw);
