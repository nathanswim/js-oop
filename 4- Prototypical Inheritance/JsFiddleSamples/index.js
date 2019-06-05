// source: https://jsfiddle.net/NhQGB/

var Base = function(x) {
    this.x = x;
    this.propInSuper = 'hello im propInSuper';
};

Base.prototype = {
    getX: function() {
        console.log(this.x);
    }
};

var Child = function(x) {
    Base.call(this, x);
};

Child.prototype = Object.create(Base.prototype);

//@override
Child.prototype.getX = function() {
    console.log(this.x * 2);
};

var child = new Child(5);
child.getX(); // 10

console.log('propInSuper: ' + child.propInSuper);
