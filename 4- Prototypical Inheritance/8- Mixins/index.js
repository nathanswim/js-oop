function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};
const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swimming');
    }
};

function Person() {}
mixin(Person.prototype, canEat, canWalk);

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

function Duck() {}
mixin(Duck.prototype, canWalk, canEat, canSwim);

const person = new Person();
console.log(person);
const fish = new Goldfish();
console.log(fish);
const duck = new Duck();
console.log(duck);
