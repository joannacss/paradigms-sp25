// PART 1: SETs

const set = new Set()

set.add(1)                      // Set(1) { 1 }
set.add(1)                      // Set(1) { 1 }
set.add('jon')                  // Set(2) { 1, 'jon' }

set.has(1)                      // true
set.has(3)                      // false
set.has('Jon'.toLowerCase())    // true


console.log(set.size)            // 2

set.delete('jon')                // removes 'jon' from the set
set.has('jon')                   // false, value has been removed

set.forEach(x => console.log(x)) // prints 1

let array = [1, 2];
set.add(array);
set.has(array);                 // true 👍

set.add([5, 3]);
set.has([5, 3]);                 // false 🤯

let obj1 = {a: 1, b: 2}
set.add(obj1)                   // Set(4) { 1, [ 1, 2 ], [ 5, 3 ], { a: 1, b: 2 } }
let obj2 = {a: 1, b: 2}
set.add(obj2)                   // Set(5) { 1, [ 1, 2 ], [ 5, 3 ], { a: 1, b: 2 }, { a: 1, b: 2 } }
                                // obj2 is referencing a different object 


// PART 2: QUEUE
const queue = [] // or new Array()
// adding elements
queue.push([0,0])       
queue.push([5,0])
queue.push([0,3])

queue.length // 3
// retrieving elements
let element = queue.shift() // [0,0]


// checking the size
queue.length // 2

// checking is empty
queue.length === 0 

// interesting behavior
// decreasing its length remove elements
queue.length = 0 // queue = [] 
// increasing its length add elements
queue.length = 1 // queue = [<1 empty item>]
let item = queue.shift() // item = undefined
