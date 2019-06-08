'use strict';

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
// Method call: this points to the current object
c.draw();

const draw = c.draw;
console.log(draw);
// function call: by default this will point to Window/Global
draw();

class Circle2 {
  draw(){
    console.log(this);
  }
}

const c2 = new Circle2();
const draw2 = c.draw;
draw2();