function enumerate(i,j) {
    /* your solution goes here */
    let init = new dnum(null, 2,2); //intializes a dynamic number(dnum) class with for enumeration
    let enumList = [];
    iterState(init, i, j, enumList); //returns the list of enumerations from given range
    return enumList 
}

class dnum { //class that includes the state for state machine and the numerator(a) and denominator(b)
    constructor(state, a, b) {
    this.state=state;
    this.a=a;
    this.b=b;
    }
    printVal(){ //method that returns the numerator and denominator in desired format string
        return `${this.a}/${this.b}`;
    }
}

function checkState(d){ //state machine that alters the dnum class based on the state following the enumeration
    if (d.state == null){        
        d.state = 'down';
        return
    }
    if (d.state =='down'){
        d.a = d.a + 2;
        d.state = 'dUp' 
        return
    }
    if (d.state == 'dUp'){ //diagonal up
        d.a = d.a - 2;
        d.b = d.b + 2;
        if (d.a == 2){            
            d.state = 'right';            
        }
        return
    }
    if (d.state == 'right'){
        d.b = d.b + 2;
        d.state = 'dDown';
        return
    }

    if (d.state == 'dDown'){//diagonal down
        d.a = d.a + 2;
        d.b = d.b - 2;
        if (d.b == 2){
            d.state = 'down';
        }
        return
    }
    
}

function initState(d, start){//intializes the dnum to a certain starting state based on given start index
    for (let i=0; i < start; i++){
        checkState(d);        
    }
}

function iterState(d, start, max, solution){ //iterates the state machine the specified amount of times and appends values to solution list
    if (start > 1){
        initState(d, start - 1);
    }

    for (let i=start; i < max + 1; i++){
        if (i < 1){
            solution.push(null);
            continue;
        }
        checkState(d)
        solution.push(d.printVal())
    }
}

//runing function
//let num1 = -1;
//let num2 = 4;

//console.log(enumerate(num1, num2));
