// <!-- # Arrays Loops Conditionals
//
// ---
// Title: Arrays, Loops, and Conditional Reps <br>
// Type: Homework<br>
// Duration: "4:00"<br>
// Creator: Alex White<br>
//     Modified by: Daniel Scott<br>
//     Course: WDIplus-ATX<br>
// Competencies: Arrays, Loops, Conditionals <br>
// Prerequisites: JavaScript <br>
//
// ---
// # Homework
//
// ## Setup
//
// 1) In your terminal, navigate to to the `Week_One` folder and create another folder called (`Wednesday`).
// 2) Create a javascript file inside your `Wednesday` folder to record your answers (maybe name it `answers.js`).
// 3) Keep your answers organized! Included a commented header for each section in your answers file.
// 4) TEST YOUR WORK! Make sure that your code works
// :elephant: `node name_of_your_file.js`.
// 5) If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later.
// 6) After each section (even if you're not fully done with it), *add* and *commit* your work.
// Please use the commit messages that you see at the end of each section (modify it if you need to). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.
// 7) When you are done with your homework, push it to your `origin` (this is your Github) and make an issue on our repo.
// Final note: You are not alone! Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.
//
// ![Image of baby doing workout](http://www.sarahjm.net/wp-content/uploads/2013/09/SarahJM-funny-baby-510x301.jpg)
//
// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// &#x1F534; The commit message should read: <br>
// "Commit 1 -Easy Going answered"
// <hr>
//
// ## Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.
for (i = 0; i <= 200; i += 2) {
  console.log(i);
}
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 2 - Get Even answered"
// <hr>
//
// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}
// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
for (i = 0; i < 20; i++) {
  let randomNumber = Math.round(Math.random() * (3 - 1) + 1);
  if (i % 2 == 0) {
    console.log("Love me, pet me! HSSSSSS!");
  } else {
    switch(randomNumber) {
      case 1:
        console.log("...human...why you taking pictures of me?...");
      case 2:
        console.log("...the catnip made me do it...");
      case 3:
        console.log("...why does the red dot always get away...");
    }
  }
}
//
// >Hint: You will need to use Math.random()
//
// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 3 - Excited Kittens answered"
// <hr>
//
// ## Fizz Buzz
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (i = 1; i<= 30; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log(i + ": FizzBuzz");
    } else {
      console.log(i + ": Fizz");
    }
  } else if (i % 5 == 0) {
    console.log(i + ": Buzz");
  } else {
    console.log(i);
  }
}

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 4 - Fizz Buzz answered"
// <hr>
//
// ## Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
// ```
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]
// ```
// 1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the `thom` array and replace it with "Gameboy".
// 2. Karolin just had her birthday; change Karolin's array to reflect her being a year older.
// 3. Change Matt H's hometown from Philadelphia to "Gotham City".
// 4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

thom[0] = "Gameboy"; console.log(thom);
karolin[1]++; console.log(karolin);
matt[2] = "Gotham City";  console.log(matt);
kristyn[2] = "Brooklyn";  console.log(kristyn);
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 5 - Getting to Know You answered"
// <hr>
//
// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// 2. Use a `for loop` to call `toUpperCase()` on each of them and print out the result.
//
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 6 - Yell at the Ninja Turtles answered"
// <hr>
//
//
// ## Return of the Closets
//
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
//
// ```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// ```
//
// ### Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
let kristynsShoe = kristynsCloset.shift();
thomsCloset[thomsCloset.length - 1].push(kristynsShoe);
console.log(kristynsCloset);
console.log(thomsCloset);
//
// ### Dress Us Up
// 1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
//

console.log("I'm going to wear " + thomsCloset[0][3] + " and " + thomsCloset[1][1] + " with " + kristynsCloset[0] + ".");
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"
// <hr>
//
// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
//
for (i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i]);
}
// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.
//
for (i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    console.log(thomsCloset[i][j]);
  }
}
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 8 - I loops through their closets".
// <hr>
//
// ## Multiples of 3 and 5
//
// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0;
for (i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }

}
console.log(sum);
//
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 9 - Project Euler Problem 1 answered"
// <hr>
//
// # HTML & CSS
//
// Watch the following videos as a refresher on HTML and CSS. We recommend that you watch them once in the evening and again in the morning before class. You will be working on practicing HTML in your Morning Exercise.
//
// [HTML Video 1](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
//
// [HTML Video 2](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
//
// <hr>
//
//
//
// # Hungry for More
//
// ## Triangles
//
// 1. Write a loop that console logs a **right isosceles triangle** made of '#' that has the height and length of the argument.
//
// >Ex: argument is 7
// ```
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
let height = 10;
for (i = 1; i <= height; i++) {
  let line = [];
  for (j = 0; j < i; j++) {
    line.push("*");
  }
  console.log(line.join(''));
}
//
// 2. Write a loop that console logs an **upside down right isosceles triangle** made of '#' that has the height and length of the argument.
//
// >Ex: argument is 6
// ```
// ######
// #####
// ####
// ###
// ##
// #
// ```
//
height = 10;
for (i = 0; i < height; i++) {
  let line = [];
  for (j = height; j > i; j--) {
    line.push("*");
  }
  console.log(line.join(''));
}
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 10 - Triangles answered"
// <hr>
//
//
// ## Find the Median
// - Find the median number in the following `nums` array, then console.log that number.
// -  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`
//
// ```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums = [11,13,14];
let median = 0;
sum = 0;
for (i = 0; i < nums.length; i++) {
  sum += nums[i];
}
median = Math.floor(sum/nums.length);
console.log(median);
//
// Expected output:
// => 15
// ```
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 11 - Find the Median answered"
// <hr>
//
// ## Still Hungry?
//
// 1. Finish the questions from the morning lab
//

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


// 2. Finish the questions from the afternoon lab
//
// 3. Finish the morning exercise
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 12 - Hungry for More: I tackled..."
// <hr>
//
//  -->
