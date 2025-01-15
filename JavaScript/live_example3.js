// Using var vs let vs const
var name = 'Jon';

function greetUser() {
  // var name = 'Mark';
  console.log(name);
  if(1 > 0){
    var name = 'Steve';
  }
  console.log(name)
}

greetUser();
console.log(name); 		// (1)
greetUser();
let name = "Silva";
console.log(name); 		// (3)
name = "Santos";
console.log(name); 		// (4)