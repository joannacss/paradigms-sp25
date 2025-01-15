// Closures = Example 1
const x1 = 'OUTER';
function second1() {
	console.log(`Example 1: x=${x1}`);
}
function first1() {
	const x1 = 'FIRST'; 
	second1();
} 
first1();

// Closures = Example 2
const x2 = 'OUTER';
function second2(x2) { /* here, the parameter x2 shadows the global variable */
	console.log(`Example 2: x=${x2}`);
}
function first2() {
	const x2 = 'FIRST'; 
	second2(x2);
} 
first2();

// Closures = Example 3
function second3(callbackFunction) {
	const name = 'new';
	callbackFunction();
}

function first3() {
	const name = 'old';
	const printName = () => console.log(`Example 2: name=${name}`);
	second3(printName);
}

first3();


// Closure = Example 4
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

// y=2, x=5. Prints 7
console.log(`Example 4: add5(2)=${add5(2)}`);
// y=2, x=10. Prints 12
console.log(`Example 4: add10(2)=${add10(2)}`);


// Closure = Example  5 (A generator function)
const nextSquare = (() => {
	let previous = -1;
	return () => {
		previous++;
		return previous*previous;
	}
})(); 	// this is IIFE: immediately invoked function expression. 	
		// The function is declared and immediately invoked

for(let i = 0; i < 5 ; i++){
	console.log(`Example 5: nextSquare()=${nextSquare()}`)
}


// Closure = Example 6 (Another generator function)
let nextOddNumberGenerator = function () {
	let innerCounter = 1;

	return () => {
		let output = innerCounter;
		innerCounter = innerCounter + 2
		return output;
	};
};

// if you print nextOddNumberGenerator() it is a function! it does not give you the number, why? 
// because nextOddNumberGenerator generates another function!
let nextOddNumber = nextOddNumberGenerator(); // now you can use nextOddNumber to invoke the inner function that has a closure



for(let i = 0; i < 5 ; i++){
	console.log(`Example 6: nextOddNumber()=${nextOddNumber()}`)
}


