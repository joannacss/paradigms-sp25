function calculate(operation, a, b){
	return operation(a, b);	
}


let add = (a, b) => a+b;
let multiply = (a, b) => a*b;

x = calculate(add, 1, 2);
y = calculate(multiply, 3, 4);

console.log(x);
console.log(y);