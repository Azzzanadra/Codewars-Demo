// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
// Example

// 123  => 6
// 223  => 7
// 1337 => 14


//My solution
function getSumOfDigits(integer) {
    let sum = 0;
    let arr = integer.toString().split('');
    let conv = arr.map(x => {return Number(x)})
    let truth = conv.reduce((acc,val) => acc + val,sum)
    return truth
}
    
console.log(getSumOfDigits(123))