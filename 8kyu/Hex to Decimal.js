// Complete the function which converts hex number (given as a string) to a decimal number.


//My solution
function hexToDec(hexString){
    //your code here
    let lower = hexString.toLowerCase()
    return parseInt(lower,16)
  }
  
  console.log(hexToDec('A'))