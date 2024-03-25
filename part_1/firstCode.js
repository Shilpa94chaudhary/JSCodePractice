// We can run this command in Console, to show alert with message
// alert('Hello World');

console.log('Hello World');
console.log('This is First JavaScript code');
console.log('My name is Shilpa Chaudhary.');

// Variables & Data Type

fullName = 'Shilpa Chaudhary';
age = 28;
x = null;
y = undefined;

console.log(fullName);
console.log(age);
console.log(x);
console.log(y);

// Use let to define variable

let myName = 'Shilpa Chaudhary';

/* Using var allows for variable redefinition or redecoration
whereas let does not permit this */
var age = 59;
var age = 12;

console.log(age);

// Operators
let a = 5;
let b = 10;
console.log('a =', a, ', b =', b);
console.log('a + b =', a + b);

// Increment pre increment ++a, post increment a++
console.log('++a ', ++a);
console.log('b++ ', b++);
console.log('a =', a, ' b = ', b);

// Decrement pre decrement --a, post decrement a--
console.log('--a ', --a);
console.log('b-- ', b--);
console.log('a =', a, ' b = ', b);

// Assignment Operators

let c = 5;
let d = 2;
console.log('c =', c, ' d = ', d);
c += 3;
d -= 6;

console.log('c += 3, c = ', c, ' d -= 5, d = ', d);

c *= 2;
d /= 2;

console.log('c *= 2, c = ', c, ' d /= 2, d = ', d);

// Comparison Operator

let aa = 5; // Number
let bb = '5'; // String
let cc = 4;
let dd = '3';
let ee = '4';
let ff = 3;
let gg = 4;

console.log('5 > 4 ', aa > cc);
console.log('5 < 4 ', aa < cc);
console.log('5 > 5 ', aa > aa);
console.log('5 >= 5 ', aa >= aa);
console.log('5 <= 5 ', aa <= aa);

console.log('5 == "5" ', aa == bb);
console.log('5 === "5" ', aa === bb);

console.log('4 != "3" ', cc != dd);
console.log('4 != "4" ', cc != ee);

console.log('4 !== "3" ', cc !== dd);
console.log('4 !== "4" ', cc !== ee);

console.log('4 != 3 ', cc != ff);
console.log('4 != 4 ', cc != gg);

console.log('4 !== 3 ', cc !== ff);
console.log('4 !== 4 ', cc !== gg);
