/////////////////////////////////////////////////////////////////////////
// Greetings, Students! Use this .js file as a worksheet for your lab.//
///////////////////////////////////////////////////////////////////////

// Write your answers to the conceptual questions

// // 1. How do we assign a value to a variable?
// let variable = value;
//
// // 2. How do we change the value of a variable?
// variable = someOtherValue;
//
// // 3. How do we assign an existing variable to a new variable?
// let newVariable = variable;

///////////////////////////////////////////////////

//Write the answers to your String exercises here:
// 1. Create a variable called `firstVariable`.
let firstVariable;
//   - assign it the value of a string => `"Hello World"`
firstVariable = "Hello World";
//   - change the value of this variable to a number.
firstVariable = 42;
//   - store the value of `firstVariable` into a new variable called `secondVariable`
let secondVariable = firstVariable;
//   - change the value of `secondVariable` to a string.
secondVariable = "Lorem Ipsum";
//   - What is the value of `firstVariable`?
console.log(firstVariable); // => 42

// 2. Create a variable called `yourName` and set it equal to your name as a string.
let yourName = "Neo Jang"
//   - Write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated.
console.log("Hello, my name is " + yourName);

// Write the answers to your Boolean exercises here:
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);  // -  a _ b;
console.log(c > d);  // -  c _ d;
console.log('Name' == 'Name');  // -  'Name' ___ 'Name';
console.log(a + b == c);  // -  a _ b ___ c;
console.log(a * a == d);  // -  a _ a ___ d;
console.log(e == 'Kevin');  // -  e ___ 'Kevin';
console.log(48 == '48');  // -  48 ___ '48';

// Write the answers to The Farm here:
// 1) Write code that will print out "mooooo" if the variable `animal` is equal to `cow`.
let animal;
if (animal == 'cow') {
  console.log("mooooo");
};

// 2) Change your code so that if the variable `animal` is anything other than a cow, your should print out "Hey! You're not a cow."
if (animal == 'cow') {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
};

// Write the answers to Driver's Ed here:
// 1) Write a variable that will hold a person's age.
let age;
// 2) Write code that will print out "Here are the keys", if the age is 16 years or older.
if (age >= 16) {
  console.log("Here are the keys");
}
// 3) Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
if (age >= 16) {
  console.log("Here are the keys");
} else {
  console.log("Sorry, you're too young.");
}

// Write the answers to Just Loop It here:
// 1) Write code that will print out all the numbers in the range 0 - 10.
for(let i = 0; i <= 10; i++) {console.log(i);}
// 2) Write code that will print out all the numbers in the range 10 - 4000.
for(let j = 10; j <= 4000; j++) {console.log(j);}
// 3) Write code that will print out every other number in the range 10 - 4000.
for(let k = 10; k <= 4000; k += 2) {console.log(k);}

// Write the answers to Let's get even here:
// 1) Print out the even numbers that are within the range of 1 - 100.
for(let m = 1; m <= 100; m++) {
  if (m % 2 == 0) {
    console.log(m);
  }
}
// 2) Adjust your code to add a message next to the even number that says: "is an even number".
for(m = 1; m <= 100; m++) {
  if (m % 2 == 0) {
    console.log(m + " is an even number");
  }
}

// Write the answers to Give me Five here:
// 1) For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.
for(n = 0; n <= 100; n++) {
  if (n % 5 == 0) {
    console.log("I found a " + n + ". High five!");
  }
}

// 2) Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.
for(n = 0; n <= 100; n++) {
  if (n % 3 == 0) {
    console.log("I found a " + n + ". Three is a crowd.");
  }
  if (n % 5 == 0) {
    console.log("I found a " + n + ". High five!");

  }
}

// Write the answers to Savings account here:
// 1) Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
let bank_account = 0;
for (let p = 1; p <= 10; p++) {
  bank_account += p;
}
// >Check your work! Your bank_account should have $55 in it.
console.log("Your bank account has $" + bank_account);

// 2) You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0;
for (let q = 1; q <= 100; q++) {
    bank_account += 2*q;
}
// >Check your work! Your bank_account should have $10,100 in it.
console.log("Your bank account has $" + bank_account);

// Write the answers to Multiples of 3 and 5 here:
let sum = 0;
let max = 1000;
for (let r = 0; r < max; r++) {
  if (r % 3 == 0) {
    sum += r;
  } else if (r % 5 == 0) {
    sum += r;
  }
}
console.log("Sum of multiples of 3s and 5s under " + max + " is " + sum);







///////////////////////////////////////////////////
