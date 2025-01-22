// PART1: Objects are unordered collections
// Creating objects
let user1 = new Object();     // "object constructor" syntax
let user2 = {};             // "object literal" syntax
let user3 = {name: "Mark", birth_year: 2002}; // initializing it with values

// accessing properties (object's state)
console.log(user3.name);
console.log(user3.age);


// iterating over proprties of an object
for (let attribute in user3) {
    console.log(`${attribute}: ${user3[attribute]}`);
}
Object.keys(user3).forEach(attribute => {
    console.log(`${attribute}: ${user3[attribute]}`);
});

// what happens on the code below?
console.log(user2.name);

user2.name = "Ada"; // we can add properties dynamically
// how about now?
console.log(user2.name);




// adding a method to an object
let user4 = {
    // Properties
    name: "Amy Lee",
    birth_year: 1981,
    // this is a method that can be invoked
    age: function () { 
        return new Date().getFullYear() - this.birth_year;
    }
    /* 
    Alternative syntax: 
    age(): { ... } 
    */
    /* 
     Improper syntax: (this is not available on arrow functions)
    age: () => { return new Date().getFullYear() - this.birth_year; } 
    */
    
}
console.log(user4.age()); // 41


// PART2: Prototype-based OOP
let o1 = {x: 1}
let o2 = Object.create(o1)
o2.y = 2;
let o3 = Object.create(o2)


console.log(o3.x); // 1
console.log(o3.y); // 2
console.log(o3.z); // undefined



// Prototype chain example
let initialObj = {
    name: "Jacoby Shaddix",
    birth_year: 1976,
    age: function () { 
        return new Date().getFullYear() - this.birth_year;
    }
}

let obj1 = Object.create(initialObj);
obj1.name = "Avril Lavigne";
obj1.birth_year = 1984;

let obj2 = Object.create(initialObj);
obj2.name = "Amy Lee";

let obj3 = Object.create(initialObj);


console.log(`initialObj name = ${initialObj.name} and age ${initialObj.age()}`)
console.log(`obj1 name = ${obj1.name} and age ${obj1.age()}`)
console.log(`obj2 name = ${obj2.name} and age ${obj2.age()}`)
console.log(`obj3 name = ${obj3.name} and age ${obj3.age()}`)


// Prototypal instantiation
function Singer(name, birth_year){
	this.name = name;
	this.birth_year = birth_year;
}

Singer.prototype.age = function() {
	return new Date().getFullYear() - this.birth_year;
};

Singer.prototype.toString = function(){
    return `${this.name} (age=${this.age()})`
}

let singer1 = new Singer("Jacoby Shaddix", 1976);
let singer2 = new Singer("Avril Lavigne", 1984);
let singer3 = new Singer("Amy Lee", 1981);

console.log(singer1);
console.log(singer2);
console.log(singer3);


// Syntatic Sugar
class Singer2{
	constructor(name, birth_year){
		this.name = name;
		this.birth_year = birth_year;
	}

	age() {
		return new Date().getFullYear() - this.birth_year;
	} 
    toString (){
        return `${this.name} (age=${this.age()})`
    }
}

let singer4 = new Singer2("Jacoby Shaddix", 1976);
let singer5 = new Singer2("Avril Lavigne", 1984);
let singer6 = new Singer2("Amy Lee", 1981);

console.log(singer4);
console.log(singer5);
console.log(singer6);


// how do I know my class name?
console.log(`Object type for singer1 ${singer1.constructor.name}`);
console.log(`Object type for singer4 ${singer4.constructor.name}`);


