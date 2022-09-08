// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My solution
function fakeBin(x){
    return x.split('').map(p => p >= 5 ? 1:0).join('');
  }
  
  console.log(fakeBin('509321967506747'))