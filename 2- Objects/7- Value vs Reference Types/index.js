/*
Value Types:
    Number
    String
    Boolean
    Symbol
    undefined
    null

    Reference Types:
    Object
    Function
    Array
    
* Primitives are copied by value
* Objects are copied by their reference

*/

let x = 10;
let y = x; // value is copied.

x = 20;
console.log(x);
console.log(y);

let objx = { value: 10 };
let objy = objx; // reference is copied, NOT the value.
objx.value = 20;

console.log(objx);
console.log(objy);

let number = 10;

function increase(number) {
    number++;
}
increase(number);
console.log(number);

let numberobj = { value: 10 };

function increaseobj(number) {
    number.value++;
}
increaseobj(numberobj);
console.log(numberobj);
