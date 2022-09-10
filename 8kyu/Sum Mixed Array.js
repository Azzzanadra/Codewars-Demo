// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


//My solution
function sumMix(x){
    const num = x.map(y => Number(y))
    return num.reduce((acc,val) => acc + val,0)
  }