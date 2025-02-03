function reversedSum(num1, num2) {
    /* your solution goes here */ 
    return reverseNum(addNum(reverseNum(num1),reverseNum(num2)))
}

function reverseNum(num){
    let string = num.toString(); //converts all numbers to string 
    let reverseNum = string.split(""); //converts strings to array
    reverseNum.reverse(); //reverse array
    for (let i = 0; i < reverseNum.length; i++){ //eliminates leading 0s 
        if (reverseNum[i] != 0){
            break;
        }
        reverseNum[i]='';
    }
    return reverseNum.join("");//converts array back to a string
}

function addNum(num1, num2){ //adds two variables by typecasting to Number 
   return Number(num1) + Number(num2);
}

//let num1 = 10;
//let num2 = '12';

//console.log(reversedSum(num1, num2));