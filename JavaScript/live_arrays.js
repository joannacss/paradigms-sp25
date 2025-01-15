// EXAMPLE 1: imperative-style
// returns true if all elements are below or equals to a given threshold
function isBelowThreshold(array, threshold){
	for(let i = 0; i < array.length ; i++){
		if(array[i] > threshold)
			return false;
	}
	return true;
}
const array1 = [1, 30, 39, 29, 10, 13];
let output1 = isBelowThreshold(array1, 40);
console.log(`DEMO1 (imperative): ${output1}`);	// true


// // DEMO 1: Array.every(callback[,thisArg]) 
// let callback = (x) => x <= 40;
let callback = function(x){
	return x <= 40;
};
let outputDemo1 =  array1.every(callback); 
console.log(`DEMO1 (declarative): ${outputDemo1}`);


// -------------------------------------------------------------------------
// EXAMPLE 2: imperative-style
// compute all words whose size are higher than a given wordLength
function getAllWords(words, wordLength){
	let result = [];
	for(let i = 0; i < words.length ; i++){
		if(words[i].length > wordLength)
			result.push(words[i]);
	}
	return result;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let output2 = getAllWords(words, 6);
console.log(`DEMO2 (imperative): ${output2}`) 

// DEMO2: Array.filter(callback[,thisArg]) 
let outputDemo2 = words.filter((x) => x.length > 6);
console.log(`DEMO2 (declarative):${outputDemo2}`);


// -------------------------------------------------------------------------
// EXAMPLE 3: imperative-style
// Returns a new array in which each element is multiplied by 2
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
let outputDemo3 = demo3Arr.map((x) => x*2);
console.log(`DEMO3 (declarative): ${outputDemo3}`);

// -------------------------------------------------------------------------
// EXAMPLE 4: imperative-style
// Given an array of objects, create a new array with only IDs
function extractIds(array){
	let result = [];
	for(let i = 0; i < array.length ; i++){
		result.push(array[i].id);
	}
	return result;
}
let people = [
  { id: 20, name: 'Peter' },
  { id: 24, name: 'Jane' },
  { id: 56, name: 'Joe' },
  { id: 88, name: 'Jennifer' }
];
let output4 = extractIds(people);
console.log(`DEMO4 (imperative): ${output4}`) // [20, 24, 56, 88]

// // DEMO4: Using map to achieve this goal
var callback4 = (x) => x.id;
let outputDemo4 = people.map(callback4);
console.log(`DEMO4 (imperative): ${outputDemo4}`) // [20, 24, 56, 88]


// -------------------------------------------------------------------------
// EXAMPLE 5: imperative-style
// Sum all numbers in the array
function computeSum(array){
	let result = 0;
	for(let i = 0; i < array.length ; i++){
		result += array[i];
	}
	return result;
}
const array5 = [1, 2, 3, 4];
let output5 = computeSum(array5);
console.log(`DEMO5 (imperative): ${output5}`) // 10


// DEMO5: Array.reduce(callback[,initialValue])
// reducer(accumulator, currentValue, currentIndex, currentArray)
let initialValue = 0;
let outputDemo5 = array5.reduce((accumulator, x) => accumulator + x, initialValue);
console.log(`DEMO5 (declarative): ${outputDemo5}`) // 10


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
let callback6 = (x) => x%2 == 0;
let firstOutput6 = array6.filter(callback6);
let init = 0;
let callback6a = (sum,x) => sum = sum + x*x;
let outputDemo6 = firstOutput6.reduce(callback6a,init);
console.log(`DEMO6 (declarative): ${outputDemo6}`); // 80

