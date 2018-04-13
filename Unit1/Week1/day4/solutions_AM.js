// printGreeting
// console.log(printGreeting("Slimer"));
const printGreeting = (str) => {
  return ("Hello there, " + str + "!");
}
console.log(printGreeting("Slimer"));

// reverseWordOrder
const reverseWordOrder = (str) => {
  let letters = str.split(' ');
  letters.reverse();
  return (letters.join(' '));
}
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// calculate
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return (num1 + num2);
    case "sub":
      return (num1 - num2);
    case "mult":
      return (num1 * num2);
    case "div":
      return (num1 / num2);
    case "exp":
      return (Math.pow(num1, num2));
    default:
      break;
  }
}
console.log(calculate(1,2,"add"));
console.log(calculate(5,3,"sub"));
console.log(calculate(2,7,"mult"));
console.log(calculate(13,3,"div"));
console.log(calculate(2,8,"exp"));

// pandigital
const pandigital = (num) => {
  // process the num given into a sorted array of split numbers
  let numbers = num.toString().split('').sort();
  // for-loop to check if the each digit up to the length of the array matches.
  // at any point if the number doesn't match the expected value at the digit, return false and break out.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== (i + 1).toString()) {
      return false;
    }
  }
  // if the for-loop completes without breaking out, return true.
  return true;
}
console.log(pandigital(15234));
console.log(pandigital(333));
console.log(pandigital(0));
console.log(pandigital(987654321));
