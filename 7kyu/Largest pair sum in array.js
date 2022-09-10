// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.


//My solution
function largestPairSum (numbers) {
    //TODO: Write your Code here
    let max = Math.max(...numbers)
    numbers.splice(numbers.indexOf(max),1)
    let second = Math.max(...numbers)  
    return second + max
  }
  
  console.log(largestPairSum([10,14,2,23,19]))