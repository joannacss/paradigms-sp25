// A1:  Array.every(..)
// The every() method tests whether all elements in the array pass the test implemented 
// by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(`A1: ${array1.every(isBelowThreshold)}`); // true


// A2: Array.filter(..)
// The filter() method creates a new array with all elements that 
// pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

//expected output: Array ["exuberant", "destruction", "present"]
console.log(`A2: ${result}`); 

// A3: Array.map(..)
// The map() method creates a new array populated with the results of calling a 
// provided function on every element in the calling array.

const array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

// expected output: Array [2, 8, 18, 32]
console.log(`A3 ${array2} \nmapped to \n${map1}`);

// A4: Array.reduce(..)
const array3 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => 
   accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(`A4.1 ${array3.reduce(reducer)}`);
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(`A4.2 ${array3.reduce(reducer, 5)}`);
// expected output: 15

// A5: Sum elements in an array
// Imperative approach
function sumUp(array){
	let sum = 0;
	for (let i = 0; i < array.length; i++){
		sum += array[i];
	}
	return sum;
}
let answer = sumUp([2,4,6]);
console.log(`A5.1:SumUp ${answer}`);

// Declarative approach
const sumUp2 = (array) => array.reduce((a,b) => a+b);
console.log(`A5.2:SumUp2 ${answer}`);

//A6:
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// What you need [20, 24, 56, 88]
const officersIds = officers.map(officer => officer.id);
console.log("A6", officersIds);

//A7:
let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
	gender: "female",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
	gender: "male",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
	gender: "female",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
	gender: "male",
    years: 22,
  }
];

function sumAges(accumulator,pilot){
  return accumulator + pilot.years;
}
let totalYears = pilots.reduce(sumAges,0);
console.log("A7",totalYears);


