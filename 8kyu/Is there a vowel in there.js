// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


//My solution
function isVow(a){
    return a.map(x => String.fromCharCode(x) === 'a' || String.fromCharCode(x) === 'i' || String.fromCharCode(x) === 'e' || String.fromCharCode(x) === 'o' || String.fromCharCode(x) === 'u'? x = String.fromCharCode(x): x = x)
  }
  
  console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))