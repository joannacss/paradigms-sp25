// DEMO - PART1: BASIC FUNCTION DECLARATION
// 		- with / without arguments
// 		- with / without return
function sumArray(arr){
	let total = 0;
	for (let i = 0; i < arr.length; i++){
		total+= arr[i];
	}
	return total;
}
let arr = [1,2,3,"4"];
console.log(`${sumArray(arr)}`);


// DEMO - PART2: FUNCTION EXPRESSIONS (variable = function() {})
let add = function(a,b){
	return a + b;
};

console.log( add( 1, 2));


// DEMO - PART3: ARROW FUNCTIONS (...) => (expression)
let isEven = (x) => {
	return x % 2 === 0;
}; 
console.log(isEven(10));


// DEMO - PART4: CALLBACK FUNCTIONS






