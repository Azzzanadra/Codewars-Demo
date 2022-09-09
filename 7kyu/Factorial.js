// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


//My solution
function factorial(n){
    let sum = 1;
    let arr = [];
    for(i=n;i>0;i--){
      arr.push(i)
    }
    sum = arr.reduce((acc,val) => acc * val, sum)
    return sum 
  }
  
  console.log(factorial(4))