function find(nums) {
    /* your solution goes here */
    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 33) count += 1; //if the current number in the list is 33 the count is incremented
        
        else{ //if the number is not 33 the max is updated to new max number and resets count
            max = Math.max(count, max); //max gets the max value between count and current max count stored.
            count = 0; 
        }
    }
    
    //if the last value was reached before not 33 then update max to that value
    if (count != 0) max = Math.max(count, max);
    return max
}

//statement to test the find function 
//let nums = [33,33,30,0,33,33,33,33,12,33,33,33.0,33,33];
//console.log(find(nums));