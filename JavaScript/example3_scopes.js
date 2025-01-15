// Using var
var name = 'Jon';

function greetUser() {
  var name = 'Mark';
  console.log(`Welcome back, ${name}.`); // Mark
}

console.log(`Outside the function ${name}`); // Jon
greetUser();

// Using let
let hello = "Jon";
function greetUser2() {
  let hello = 'Mark';
  console.log(`Hello ${hello}`); // Hello Mark
}
greetUser2(); 
console.log(hello); // Jon
let hello = "Silva"; // SyntaxError: Identifier 'hello' has already been declared

// Using const
const hello = "Jon";
function greetUser3() {
  const hello = 'Mark';
  console.log(`Hello ${hello}`); // Hello Mark
}
greetUser3(); 
console.log(hello); // Jon
hello = "Silva"; // TypeError: Assignment to constant variable
