// for() loop

// Print 1 to 5
for (let i = 0; i <= 5; ++i) {
  console.log(i);
}

// Print Hello 5 times
for (let i = 0; i <= 5; ++i) {
  console.log('Hello');
}

// Calculate sum 1 to 10
let sum = 0;
for (let i = 1; i <= 10; ++i) {
  sum += i;
}
console.log('Sum = ', sum);

// Calculate sum 1 to n
let sum1 = 0;
let n = 100;
for (let i = 1; i <= n; ++i) {
  sum1 += i;
}
console.log('Sum of numbers 1 to ', n, ' = ', sum1);

// Var is global
for (var x = 0; x <= 5; ++x) {
  console.log('x = ', x);
}
console.log('x = ', x);

// while() loop

// Print 1 to 5
let count = 0;
while (count <= 5) {
  console.log('count = ', count);
  count++;
}

// do-while loop
count = 0;
do {
  count++;
  console.log('count = ', count);
} while (count < 10);

// for-of loop - loop on string and array

let str = 'My name is Shilpa.';
let size = 0;
for (let val of str) {
  console.log(val);
  size++;
}
console.log(size);

// for-in loop for objects

let student = {
  name: 'Rahul',
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

for (let key in student) {
  console.log('key: ', key, ' value: ', student[key]);
}

// Print all even numbers from 0 to 100
for (let i = 0; i <= 100; ++i) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* Create a game where you start with any random game number. 
Ask the user to keep guessing the game number until the user enters correct value.*/

let gameNum = 25;
let userNumber = prompt('Guess the ame number: ');

while (userNumber != gameNum) {
  userNumber = prompt('You entered wrong number. Guess again: ');
}

console.log('Congratulation!!!! you entered the right number.');
