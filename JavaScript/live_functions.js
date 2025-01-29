// DEMO - PART1: BASIC FUNCTION DECLARATION
// Example: a function that sum all the elements in an array
function subtract(a, b){
	return a - b;
}
console.log(`${subtract(2, 1)}`);


// DEMO - PART2: FUNCTION EXPRESSIONS (variable = function() {})
// Example: function that adds two numbers (a, b)
let add = function(a, b){
	return a + b;
}
// add = function (a, b){
// 	return a;
// }
console.log(add(1,2));




// DEMO - PART3: ARROW FUNCTIONS (...) => (expression)
// Example: a function (isEven) that returns true if number is even.
let isEven = (n) =>  n % 2 === 0;
console.log(isEven(4));


// DEMO - PART4: CALLBACK FUNCTIONS
// Example: a function calculate that takes as parameters an operation and two values a and b


function calculate(operation, a, b){
	return operation(a,b);

}

console.log(calculate(add, 2, 1));
console.log(calculate(subtract, 2, 1));
