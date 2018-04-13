// Functions
//
// Verbal questions
// 2. What is the difference between a **parameter** and an **argument**?
// The argument is the input, the parameter is how the input is represented in the function.

// 3. Within a function, what is the difference between **return** and **console.log**?
// return gives a function its value or return stops the function. The return value of a function passes as data, whereas console.log() does not do that.

// Palindrome
const checkPalindrome = (str) => {
  // take the string and convert to all lower case.
  // compare that to the reversed string, which is also converted to all lower case.
  if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) {
    return true;
  }
  return false;
}
console.log(checkPalindrome("Radar")); // => true
console.log(checkPalindrome("Borscht")); // => false

// Digit Sum
const sumDigits = (number) => {
  let sum = 0;
  let digits = number.toString().split('');
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
console.log(sumDigits(42));

// Pythagoras
const calculateSide = (sideA, sideB) => {
  return (Math.sqrt(sideA * sideA + sideB * sideB));
}
console.log(calculateSide(8, 6));

// Sum Array
const sumArray = (arr) => {
  let sum = 0;''
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime numbers
// Step one
const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// Step two
const printPrimes = (limit) => {
  let result = [];
  for (let i = 1; i <= limit; i++) {
    if (checkPrime(i)) {
      result.push(i);
    }
  }
  console.log(result);
}
printPrimes(97);

// Insert Dash
// a function to check if a number given is odd
const isOdd = (num) => {
  return (num % 2 != 0);
};

// insert a dash between two consecutive odd numbers
const insertDash = (str) => {
  let digits = str.toString().split('');
  let result = [digits[0]];
  for (let i = 1; i < digits.length; i++) {
    if (isOdd(digits[i-1]) && isOdd(digits[i])) {
      result.push('-');
    }
    result.push(digits[i]);
  }
  return (result.join(''));
}
console.log(insertDash(454793));

// Hungry for more
