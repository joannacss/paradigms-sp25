// -------------------------------------------------------------------------
// EXAMPLE 1: imperative-style
// returns true if all elements are below or equals to 40
// -------------------------------------------------------------------------
function isBelowThreshold(array){
	for(let i = 0; i < array.length ; i++){
		if(array[i] > 40)
			return false;
	}
	return true;
}
const array1 = [1, 30, 39, 29, 10, 13];
let output1 = isBelowThreshold(array1);
console.log(`DEMO1 (imperative): ${output1}`);	// true


// // DEMO 1: Array.every(callback[,thisArg]) 
let callback1 = (n) => n <= 40;
let outputDemo1 = array1.every(callback1);
console.log(`DEMO1 (declarative): ${outputDemo1}`);


// -------------------------------------------------------------------------
// EXAMPLE 2: imperative-style
// return an array of all words whose size are higher than 6.
// -------------------------------------------------------------------------
function getAllWords(words){
	let result = [];
	for(let i = 0; i < words.length ; i++){
		if(words[i].length > 6)
			result.push(words[i]);
	}
	return result;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let output2 = getAllWords(words); // [exuberant,destruction,present]
console.log(`DEMO2 (imperative): ${output2}`) 

// // DEMO2: Array.filter(callback[,thisArg]) 
// let callback2 = (word) => (word.length > 6);
let outputDemo2 = words.filter((word) => (word.length > 6));
console.log(`DEMO2 (declarative):${outputDemo2}`);


// -------------------------------------------------------------------------
// EXAMPLE 3: imperative-style
// Returns a new array in which each element is multiplied by 2
// -------------------------------------------------------------------------
function multiplyByTwo(array){
	let result = [];
	for(let i = 0; i < array.length ; i++){
		result.push(array[i] * 2);
	}
	return result;
}
const demo3Arr = [1, 4, 9, 16];
let output3 = multiplyByTwo(demo3Arr);
console.log(`DEMO3 (imperative): ${output3}`); // [2, 8, 18, 32]

// DEMO3: Array.map(callback[,thisArg])
let callback3 = (n) => n *2;
let outputDemo3 = demo3Arr.map(callback3);
console.log(`DEMO3 (declarative): ${outputDemo3}`);

// -------------------------------------------------------------------------
// EXAMPLE 4: imperative-style
// Given an array of objects, create a new array with only IDs
// -------------------------------------------------------------------------
function extractIds(array){
	let result = [];
	for(let i = 0; i < array.length ; i++){
		result.push(array[i].id);
	}
	return result;
}
function extractIds_map(array){
	let callback = (a) => a.id;
	return array.map(callback);
}
let people = [
  { id: 20, name: 'Peter' },
  { id: 24, name: 'Jane' },
  { id: 56, name: 'Joe' },
  { id: 88, name: 'Jennifer' }
];
let output4 = extractIds(people);
console.log(`DEMO4 (imperative): ${output4}`) // [20, 24, 56, 88]

// DEMO4: Using map to achieve this goal
let outputDemo4 = extractIds_map(people);
console.log(`DEMO4 (declarative): ${outputDemo4}`) // [20, 24, 56, 88]


// -------------------------------------------------------------------------
// EXAMPLE 5: imperative-style
// Sum all numbers in the array
// -------------------------------------------------------------------------
function computeSum(array){
	let result = 0;
	for(let i = 0; i < array.length ; i++){
		result += Number(array[i]);
	}
	return result;
}
const array5 = ["1", 2, "3", 4]; // TODO: what the output would be if array5 = [1, 2, 3, "4"]
let output5 = computeSum(array5);
console.log(`DEMO5 (imperative): ${output5}`) // 10


// DEMO5: Array.reduce(callback[,initialValue])
// reducer(accumulator, currentValue, currentIndex, currentArray)
let callback5 = (previousValue, currentValue) => previousValue + currentValue;
let outputDemo5 = array5.reduce(callback5, 10);
console.log(`DEMO5 (declarative): ${outputDemo5}`) // 10
let out52 = array5.reduce(callback5);




// //Example6: Sum the squares of the elements on the even elements
function sumOfEvenSquares(array){
	let sum = 0;
	for(let i = 0; i < array.length ; i++){
		if(array[i] % 2 == 0)
			sum += array[i] * array[i];
	}
	return sum;
}

let array6 = [4, 11, 25, 23, 8];
let output6 = sumOfEvenSquares(array6);
console.log(`DEMO6 (imperative): ${output6}`); // 80

// DEMO6: combining filter, map, reduce!
callback6 = (value) => value % 2 == 0
callback7 = (value) => value * value
let outputDemo6 = array6.filter(callback6)
outputDemo6 = outputDemo6.map(callback7)
outputDemo6 = outputDemo6.reduce(callback5)
//console.log(finalResult)
// =/* ... TODO ... */;
console.log(`DEMO6 (declarative): ${outputDemo6}`); // 80

