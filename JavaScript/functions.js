// Basic function with arguments
// F1
function logMessage(message){
	console.log(message);
}
logMessage("F1: Hello World");

// Basic function with a return type
// F2
function sum(a,b){
	return a+b;
}
let result = sum(1,2);
console.log(`F2: ${result}`);

// Summing an array
// The imperative way
// F3
function sumArray(arr){
	let total = 0;
	for (let i = 0; i < arr.length; i++){
		total+= arr[i];
	}
	return total;
}
	
let arr = [1,2,3,4];
console.log(`F3: ${sumArray(arr)}`);

// Summing an array
// The imperative way
// F4
function sumArray2(arr){
	let total = 0;
	for (let i in arr){ // short form for for loop
		total+= arr[i];
	}
	return total;
}	
console.log(`F4: ${sumArray2(arr)}`);

// Variable visibility
// We would get an error if we try to access total
// outside the function
// Summing an array
// The imperative way
// F5
function sumArray3(arr){
	let total = 0;
	for (let i in arr){ // short form for for loop
		total+= arr[i];
	}
}
sumArray3(arr);
//console.log(`F5: ${total}`); // ERROR HERE!!! So commenting out!


// In this case the function acts on an *OUTER* variable
// F6
let totalx = 0;
function sumArray4(arr){
	for (let i in arr){ // short form for for loop
		totalx+= arr[i];
	}
}
//let arr = [1,2,3,4];
sumArray4(arr);
console.log(`F6: ${totalx}`);

// Outer variables. 
// Missing parameter
// F7
function showMessage(sender, message) {
  sender = '*' + sender + '*'; // pretty printing
  console.log(` ${sender} : ${message}` );
}
// Default value
function showMessage2(sender, message="ping") {
  sender = '*' + sender + '*'; // pretty printing
  console.log(` ${sender} : ${message}` );
}

let sender = "Melissa";
showMessage(sender, "Hello. Is anyone there?"); // Message with two arguments
showMessage(sender); // Message with missing 2nd argument -> undefined
showMessage2(sender); // Message sent to other function with default argument


// Exploring free variables
// F8
const x = "OUTER";
function second() {
	console.log(`F8: The output is: ${x}`);
}
function first() {
	const x = "FIRST";
	second();
}
first();

// More on closures
// F9
function second(f){
	const name = "new";
	f();
}

function first(){
	const name = "old";
	const printName = () => console.log(name);
	second(printName);
}
first();

// Function expressions
// F10
let sayHi = function() {
  console.log( "F10: Hello" );
};
console.log(sayHi);

// We can treat it like any other data
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //  this still works too (why wouldn't it)

// Arrow functions
// F11
// let func = (arg1, arg2, ...argN) => expression
// Short version of a function expression!
let sumF11 = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sumF11 = function(a, b) {
  return a + b;
};
*/
console.log(`F11: ${sumF11(1, 2)}` ); // 3


// Arrow function with only one argument, omit the parens
// F12
let double = n => n * 2;
console.log(`F12 ${double}`);
console.log(`F12 ${double(3)}` ); // 6


// Arrow functions can be used like function expressions
// This one is nested!
// F13
// We will use the node.js readline construct.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question(`F13: How old are you?`, (age) => {
  let welcome = (age < 21) ?
  () => console.log("F13: Sorry, I can't serve you a drink") :
  () => console.log("F13: What would you like to drink?");
  welcome();
  readline.close();
})

// Arrow functions can be used like function expressions
// This one is nested!
// F13
// We will use the node.js readline construct.
// Uses readline (see above)
// Callback functions
// F14
function ask(question, yes, no){
	readline.question(question, (response) => {
		readline.close();
		if(response==="yes")
			yes();
		else
			no();
	})
}
function showOk() {
  console.log( "F14: That's what I want to hear." );
}
function showCancel() {
  console.log( "F14: That's too bad." );
}
// usage: functions showOk, showCancel are passed as arguments to "ask"
ask("F14: Do you agree that JavaScript is awesome?", showOk, showCancel);






