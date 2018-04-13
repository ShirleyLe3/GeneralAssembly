// initial setup
console.log('file working')

// define the function.
const printBoo = () => {
  console.log('=====');
  console.log('Boo!!');
  console.log('=====');
}

// invoke the function.
printBoo();
printBoo();
printBoo();

// Activity: Write a function printSum that will console.log the result of 10 + 10.
const printSum = () => {
  console.log(10 + 10);
}

// invoke the printSum.
printSum();

// Extra: Write a function printTriangle that will print these pound signs to the console (there are 5 console.logs inside the function):
const printTriangle = () => {
  let line = "";
  for (let i = 1; i <= 5; i++) {
    line += "*";
    console.log(line);
  }
}
printTriangle();

// Activity: Write a function printParameter that takes a parameter input. The function should simply console.log the value of the input parameter. Invoke the function with an argument.
const printParameter = (parameter) => {
  console.log(parameter);
}
printParameter("an argument");

// Extra: Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.
const minusOne = (number) => {
  console.log(number - 1);
}
minusOne(10);
minusOne(100);
minusOne(Infinity);

// Extra: Write a function called getLastElement that takes a parameter arr. Invoke the function with an array as the argument. The function should print the last element within the array.
const getLastElement = (array) => {
  console.log(array[array.length - 1]);
}
getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

// Activity: Write a function makeSentence that takes three parameters and interpolates them into a fully formed sentence.
const makeSentence = (str1, str2, str3) => {
  console.log("Oh boy, do " + str1 + " " + str2 + " " + str3 + " or what?");
}
makeSentence('I', 'want', 'chimichangas'); // => 'Oh boy, do I want chimichangas or what?'

// Extra: Write a function divideThreeNums that takes three parameters and prints the third parameter divided by the result of the second parameter divided by the first.
const divideThreeNums = (num1, num2, num3) => {
  console.log(num3/(num2/num1));
}
divideThreeNums(10, 5, 2)   // 4
divideThreeNums(30, 2, 9)   // 135

// Activity: Write a function calculateArea that takes two parameters width and length and multiplies them. This will give us the area of a rectangle. Invoke the function a couple of times with different arguments each time.
const calculateArea = (width, length) => {
  // console.log("Width: " + width + ", Length: " + length + " => Area: " + width*length);
  return (width*length);
}
console.log(calculateArea(4,5));
console.log(calculateArea(2,11));
console.log(calculateArea(7,13));
// Activity and Research: Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. "123") Use your google-fu to research converting a number into a string. Invoke the function a couple of times with different arguments each time
const threeNumbers = (num1, num2, num3) => {
  return (num1.toString() + num2.toString() + num3.toString() );
}
console.log(threeNumbers(4,2,0));
// Extra: Write a function that takes two parameters (strings) and returns true (Boolean) if the two strings are identical, false if not.
const areTheySame = (str1, str2) => {
  return (str1 === str2);
}
console.log(areTheySame("Hello", "Hello"));
console.log(areTheySame("Hello", "Hell"));

// Activity: Using method chaining, figure out how to turn a string into an array, reverse the array, and turn the reversed array back into a string. This is one way to reverse a string. Chain the methods together on one line.
const reverseString = (str) => {
  let letters = str.split('');
  letters.reverse();
  return (letters.join(''));
}
console.log(reverseString("Palindrome"));
