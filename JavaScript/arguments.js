// Arguments example
function f(x, y) { return [x, y] }
console.log(f(1))       // too few args, output is [1, undefined]
console.log(f(1, 2, 3)) // too many args (3 is ignored), output is [1, 2]
const args = [1, 2]
console.log(f(...args)) // args are unpacked, output is [1, 2]



function g(x, ...y) { return [x, y] }
console.log(g(1, 2, 3)) // args packed, output is [1, [2, 3]]
console.log(g(1, 2)) 	// args packed, output is [1, [2]]


function h(x, y=0) { return [x, y] }
console.log(h(1))       // too few args, output is [1, 0]


function t(x=0,y){ return [x, y] }
console.log(t()) 	// [0, undefined]	
console.log(t(1))	// [1, undefined]

// parameter destructuring
function z({x, y}={}){ return [x,y]}
console.log(z({ x : 70, y : 175})); 

// Passing by reference vs Passing by value
const x = [1,2,3];
const y = [4,5,6];
function example(a, b) {
	a = 300;
	console.log(x); // [1,2,3]
	b[1] = 400;
	console.log(y) // [4,400,6] --> see the change!
}

example(x, y);








