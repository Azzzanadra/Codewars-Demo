// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//My solution
function grow(x){
    return x.sort((a,b) => a-b).reduce((acc,val) => acc * val,1)
  }
  
  console.log(grow([4,1,1,1,4]))