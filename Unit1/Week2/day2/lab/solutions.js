
// Given, the following object, log the third element from the array
const fun = {
    asdf: ["afd", "matt", 'sweet']
}
console.log(fun.asdf[2]);

// Given, the following object, log the elbow property
const body = {
    arm: {
        elbow: 'pointy'
    }
};
console.log(body.arm.elbow);

// Given, the following object, call the jump method
const person = {
    jump(){
        console.log('fly!');
    }
};
person.jump();

// Create a data structure such that the following code logs the value "blue"
const myList = [
	{eyeColor: 'blue'}
];
console.log(myList[0].eyeColor);

// Create a data structure such that the following code logs the value "buy supplies"
const myArrays = [
	["a", "1"],
	["b", "2"],
	["c", "3", "@", "^", "buy supplies"]
]
console.log(myArrays[2][4]);

// Call the function in the given code:
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];
awesome[2]();

// Loops over the following array, and print its values:
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
for (let i = 0; i < refrigerator.fruits.length;	i++) {
	console.log(refrigerator.fruits[i]);
}

// Use two loops to loop over each array in the given "container" array
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];
for (let i = 0; i < container.length; i++) {
	for (let j = 0; j < container[i].length; j++) {
		console.log(container[i][j]);
	}
}

// Create a data structure such that the following logs `4`
const createCar = () => {
	return {
		tires: 4
	};
}
console.log(createCar().tires);

// Create a data structure such that the following logs `pears`
const generateShoppingList = () => [
	"There",
	"Is",
	"No",
	"pears"
]
console.log(generateShoppingList()[3]);

// Create a data structure such that the following logs `20lbs`
const createRobot = () => {
	return {
		stats: {
			weight: '20lbs'
		}
	}
}
console.log(createRobot().stats.weight);

// Call the drive method
const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}
generateCar().drive();

// Create a data structure such that the following executes without errors:
// Run the inner function:
const createFunction = () => {
	return ()=> {
		console.log("createFunction()() executes without errors!")	
	}
}
createFunction()();

// Log the message attribute
const account = {
    tweet(){
        return {
            message: "fun"
        }
    }
}
console.log(account.tweet().message);

// Log the second element in the array
const me = {
    foo(){
        return {
            array: [2.5, 7, true]
        }
    }
}
console.log(me.foo().array[1]);

// Use the instruments object to print the following.

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

// 1.  `"telecastor"`
console.log(instruments.guitar.electric[1]);
// 2.  `"santa cruz"`
console.log(instruments.guitar.acoustic[2]);
// 3.  `"washburn"`
console.log(instruments.banjo[2]);
// 4.  `"weber"`
console.log(instruments.mandolin[1]);

// 1.  Using the instruments object loop through all
// the electric guitars and print them to the console.
for (let i = 0; i < instruments.guitar.electric.length; i++) {
	console.log(instruments.guitar.electric[i]);
}

// 2.  Add a property to the instruments object, that includes
// a list of your favourite singers.
instruments.favoriteSingers = ["Hatsune Miku", "Utada Hikaru"];
console.log(instruments);

// ### Using crazy object print the following
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favouriteHobby: "Swearing at Larry and Jeff"
    }
    ]
  }
}
// 1.  `"omg my mouth is burning"`
console.log(crazyObject.taco[1].salsa[5]);
// 2.  `"Pretty pretty prettayyyyy good"`
console.log(crazyObject.larry.quotes[0]);
// 3.  `"Swearing at Larry and Jeff"`
console.log(crazyObject.larry.characters[2].favouriteHobby);
// 4.  `"Chicken Teriyaki Boyyyyyy"`
console.log(crazyObject.larry.nicknames[1]);
// 5.  `"The object the contains the name funkhauser"`
// console.log(crazyObject);

// Create a data structure such that the following code logs "boat":
const baz = {
	foo: () => {
		return {
			matt: {
				travel: "boat"
			}	
		}	
	}
}
console.log(baz.foo().matt.travel);


// Create a data structure such that the following code executes without error:
const factory = {
	createCar: () => {
		return {
			startEngine: () => {
				console.log("Without error!")
			}
		}
	}
}
factory.createCar().startEngine();

// Run the inner function:
const matt = {
    blink(){
        return ()=>{
            console.log('hi')
        }
    }
}
matt.blink()();

// Access the `foo` property:
const asdfasdf = [
    true,
    false,
    ()=>{
        return {
            foo: 'some value'
        }
    },
    'apple'
];
console.log(asdfasdf[2]().foo);

// Create a data structure such that the following code logs "dog"
const matt2 = [
	"",
	() => {
		return {
			someArray: [
				"dog"
			]	
		}
	}
];
console.log(matt2[1]().someArray[0]);

// Create a data structure such that the following code logs "blue"
const foods = [
	"",
	() => {
		return {
			anObject: {
				color: "blue"
			}
		}
	}
]
console.log(foods[1]().anObject.color);

// Call the funStuff() method:
const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff(){
                console.log('yaaassss');
            }
        }
    }
];
list[3]().funStuff();

// Call the most inner function:
const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];
foo[4]()();


// ## Afternoon Lab
// Log the following function:
const foo2 = ()=>{
    console.log('I have been invoked!');
}
foo2();

// Call `foo`, passing in a function:
const foo3 = (param)=>{
    console.log(param);
}
foo3("param passing");

// See if you can guess what this will log:
const foo4 = (param, param2) => {
    param(param2);
}
const bar = (param) => {
    console.log(param);
}
foo4(bar, 'hi'); // => hi

// See if you can guess what this will log:
const foo5 = (param, param2) => {
    param(param2, 'hello');
}
const bar2 = (param, param2) => {
    console.log(param2);
}
foo5(bar2, 'hi');	// => hello


// Call the `someMethod` function, passing in `myFunc`.  It should log `About to invoke the callback` and then `I have been called!`
const foo6 = {
    someMethod(callback){
        console.log('About to invoke the callback');
        callback();
    }
}
const myFunc = ()=>{
    console.log('I have been called!');
}
foo6.someMethod(myFunc);

// Alter the following code so that `myFunc` properly logs the `height` property of `foo`
const foo7 = {
    height:5,
    someMethod(callback){
        callback();
    }
}
const myFunc2 = (param)=>{
    console.log(param);
}
myFunc2(foo7.height);

// Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string
// const shirtColor = {
//   color: ["red", 'blue, 'green', 'white', 'pink'],
// }
// Expected Output:  ```"red, green, white, pink"```


// Follow the following steps:
//    1.  Create a function called `wordReverse` that reverses a string.
const wordReverse = (str) => {
	return (str.split(' ').reverse().join(' '));
}
//    2.  Create a function called `toUpperCase` that capitalizes every letter in a string.
const toUpperCase = (str) => {
	return str.toUpperCase();
}
//    3.  Write a function, called `repMaster`, that accepts two arguments, input and a function. Input should be able to be used with the function.  The function used as an argument must return a string.  `repMaster` should take the result of the string, passed as an argument to the argument function, and return this result with `' proves that I am the rep MASTER!'` concatenated to it.  
const repMaster = (input, func) => {
	console.log(func(input) + ' proves that I am the rep MASTER!');
}
//    Expected Output:  
repMaster("Never give your heart to a blockhead", wordReverse) // => "blockhead a to heart your give never proves that I am the rep MASTER!"
repMaster("I finished this practice", toUpperCase);	// => "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"

// Follow the following steps:
//     1. Create a function that takes a parameter and logs it
const logsIt = (str) => {
	console.log(str);
}
//     1. Create a second function that logs 'hi'
const logsHi = () => {
	console.log('hi');
}
//     1. Invoke the first function, passing in the second function as a parameter
logsHi(logsIt("somet string"));
//     1. You should see a function reference being logged
//     1. Alter the first function so that it invokes its parameter
//     1. If you did these steps correctly, you should get a log of 'hi'

// Fix the last line of this snippet so it logs `this method was called`:
const bar3 = {
    someMethod(param){
        param();
    }
}
const foo8 = {
    someMethod(){
        console.log('this method was called');
    }
}
// bar.someMethod; //fix this line
foo8.someMethod(); //fix this line

// ## Hungry for More?

// Read the [Tips and Tricks Notes](https://git.generalassemb.ly/WDIplus-ATX/combining-datatypes-morning-lab/blob/master/TIPS.md) and ask the instructors any questions that come to mind

