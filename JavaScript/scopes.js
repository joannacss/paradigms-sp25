let a1 = "Joanna"; // global
function first() {
    a2 = "Cecilia"; // global
    var a4 = "da Silva";
    if(true){  // block-scope #1
        const a5 = "Santos";
        if(true){ // block-scope #2
            const a6 = "a6";
            var a7 = "a7";
            console.log(a5);        
        }
    }
    console.log(a1); // prints "Joanna"
    console.log(a2); // prints "Cecilia"
    console.log(a3); // prints "A constant"
    console.log(a4); // prints "da Silva"
    // If you un-comment the line below you'd get:
    // ReferenceError: a5 is not defined
    /* console.log(a5); */
}
const a3 = "A constant"; // global
function second(x) {
    let b = 2; // local scope
    // prints "Joanna 2"
    console.log(a1 + ' ' + b);
    if (b > 0) { // block-scope #1
        let c = 'hello'; // block scoped
        // prints "Joanna 2 hello"
        console.log(a1 + ' ' + b + ' ' + c);
    }
    // prints the value passed to x
    console.log(x); 
    // If you un-comment the line below you'd get:
    // ReferenceError: c is not defined
    /* console.log(a1 + ' ' + b + ' ' + c);  */
}
first()
second()

