let counter = 1;

function nextOddNumber(){
	let output = counter;
	counter = counter + 2
	return output;
}

function userFunction1(){
	console.log(`userFunction1 ${nextOddNumber()}`)
	console.log(`userFunction1 ${nextOddNumber()}`)
}

function userFunction2(){
	console.log(`userFunction2 ${nextOddNumber()}`)
	console.log(`userFunction2 ${nextOddNumber()}`)
}


function userFunction3(){
	console.log(`userFunction3 ${nextOddNumber()}`)
	console.log(`userFunction3 ${nextOddNumber()}`)
}



userFunction1()
userFunction2()


// DEMO: how to use closures to solve this problem?
function nextOddNumberClosure(){
	let innerCounter = 1;
	return () => {
		let output = innerCounter;
		innerCounter += 2;
		return output;
	};
}

let generator1 = nextOddNumberClosure();
console.log(generator1()); // 1
console.log(generator1()); // 3
console.log(generator1()); // 5
console.log(generator1()); // 7

let generator2 = nextOddNumberClosure();
console.log(generator2());
console.log(generator2());
console.log(generator2());
console.log(generator2());






