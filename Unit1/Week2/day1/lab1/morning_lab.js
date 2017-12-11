
// Syntax
// {} 	curly braces define the object.
// : 	colon coupless key and its associated value.
// , 	comma separates lines, instead of semicolon.

// Me
const me = {
	name: "William Wallace",
	age: "32",
	email: "william.wallace@freedom.com"
}

console.log(me.name);
me.age = 1000;
console.log(me.age);
me["place of residence"] = "Scotland";
console.log(me["place of residence"]);

// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// What would you write to access the name and console.log it?
console.log(monster.name);
// What would you write to change the type to 'creature' (without changing it inside the object)
monster.type = 'creature';
// What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;
// console.log the object to make sure type is creature, and age is 6
console.log(monster);

// Ogres
const adventurer = {
	name: "Titanius Anglesmith",
	hitPoints: 100,
	strength: 10
}

const ogre = {
	hitPoints: 200,
	strength: 15,
	weakAgainst: "fire"
}

const battle = () => {
	while (adventurer.hitPoints > 0 || ogre.hitPoints > 0) {
		console.log();
	}
}


// Extra stuff: Cat combinator
// 1. Mama cat
const cat1 = {
	name: 'Misty',
	breed: 'Persian',
	age: 6
}

console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa cat
const cat2 = {
	name: 'Rusty',
	breed: 'Stray',
	age: 5
}

// 3. Combine cats!
const combineCats = (obj1, obj2) => {
	let offspring = {
		name: obj1.name + obj2.name,
		age: 1,
		breed: obj1.breed + "-" + obj2.breed
	}
	return offspring;
}
console.log(combineCats(cat1, cat2));
console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));

// 4. Cat brain bender
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

