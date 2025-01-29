// DEMO - PART1: BASIC FUNCTION DECLARATION
// Example: a function that sum all the elements in an array
function sumArray(arr){
	let total = 0;
	for (let i = 0; i < arr.length; i++){
		total+= arr[i];
	}
	return total;
}
let arr = [1,2,3,4];
console.log(`${sumArray(arr)}`);


// DEMO - PART2: FUNCTION EXPRESSIONS (variable = function() {})
// Example: function that adds two numbers (a, b)


// DEMO - PART3: ARROW FUNCTIONS (...) => (expression)
// Example: a function (isEven) that returns true if number is even.


// DEMO - PART4: CALLBACK FUNCTIONS
// Example: a function calculate that takes as parameters an operation and two values a and b


