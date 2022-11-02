// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.


//My solution
function stringTransformer(str) {
    let splited = str.split(' ').reverse().join(' ')
  
    return splited.split('').map(x => x === x.toUpperCase()? x = x.toLowerCase():x = x.toUpperCase()).join('')
  }
  
  console.log(stringTransformer('Example string'))