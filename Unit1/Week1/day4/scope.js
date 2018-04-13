// Activity: Declare a variable and try to access it from a scope where it **cannot** be accessed (verify that it cannot be accessed).
// {
// 	const item = 'spicy meatball';
// }
// console.log(item);

// Activity: What if ...? What if you omit let or const when declaring your variable? Run some tests on accessibility. Accessibility within a block, outside a block, etc.
// {
// 	item = 'spicy meatball';
// }
// console.log(item);

// => spicy meatball

//
// for (var i = 0; i < 2; i++) {
// 	console.log('Inside the block: ', i);
// }
//
// console.log('Outside the block: ', i);

// Activity: Write a function checkSquare that will return true if a number is a perfect square (Check if the square root is a whole number).
const checkSquare = (num) => {
	let squareRoot = Math.sqrt(num);
	if (squareRoot === Math.round(squareRoot)) {
		return true;
	}
	return false;
}
console.log(checkSquare(47));
console.log(checkSquare(48));
console.log(checkSquare(49));
// Write function checkToLimit that will loop up to an arbitrary limit brought in as a param (say, 100), and console log whether each number is a perfect square. Call upon the previously defined checkSquare function.
const checkToLimit = (param) => {
	for (let i = 0; i <= param; i++) {
		if (checkSquare(i)) {
			console.log(i + " is a perfect square.");
		}
	}
}

checkToLimit(100);

// ADVANCED: Functions can call themselves
const countdown = (num) => {
	if (num == 0) return;
	console.log(num);
	return countdown(num - 1);
}
countdown(50);


// RESEARCH
//
// Find and use a Math method to find the square root of a number.

// Find the square root of PI.
console.log("Square root of pi is " + Math.sqrt(Math.PI) + ".");
// Find and use a Math method to raise 5 to the power of 4 (exponentiation).
console.log("5 to the power of 4 is " + Math.pow(5,4) + ".");
// Use Math.Random to simulate a roll of two six-sided die. (2-12)
const sixSidedDie = () => {
	return Math.round(Math.random() * 6);
}
console.log("Random number from two six-sided die are " + sixSidedDie() + " and " + sixSidedDie());
