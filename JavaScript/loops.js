const numbers = [1, 2, 3, 4, 5];

// using for loop to iterate over the array
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Output each element of the array
}

// using while loop to iterate over the array
var i = 0; // Initialize index outside the loop
while (i < numbers.length) {
  console.log(numbers[i]); // Output each element of the array
  i++; // Increment index inside the loop
}

// using do...while loop to iterate over the array
var i = 0; // Initialize index outside the loop
do {
  console.log(numbers[i]); // Output each element of the array
  i++; // Increment index inside the loop
} while (i < numbers.length);



// Loop that utilizes falsey!
var i = 3;
var total = 0;
while (i) {
	total += i;
	i-=1;
}
console.log(`The total is: ${total}`);



// break out of loop
var sum = 0;
var target = 5;
while (true) {
  if (sum === target) break; // (*)
  sum++;
}
console.log(`Sum: ${sum}`);

// break/continue
var sum = 0;
var target = 6;
i = 0;
let j=0; 
for (; i <= 3; i++) {
	for (j=0; j <= 3; j++) {
		if ( i * j === target)
			break;  
	}
}
console.log(`Values at break out are: ${i},${j}`);

// break with labels
target = 6;
i = 0; 
j = 0;
outer: for (; i <= 3; i++) {
	for (j=0; j <= 3; j++) {
		console.log(`** ${i},${j}`);
		if ( i * j === target){
			console.log(`${i},${j}`);
			break outer;  
		}
	}
}
console.log(`Values at break out are: ${i},${j}`);