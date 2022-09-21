// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


//My solution
function findMissingLetter(array)
{
  const alphaSmall = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const alphaBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let slicedBig = alphaBig.slice(alphaBig.indexOf(array[0]),alphaBig.indexOf(array[array.length-1]))
  let slicedSmall = alphaSmall.slice(alphaSmall.indexOf(array[0]),alphaSmall.indexOf(array[array.length-1]))
  for(i=0;i<array.length;i++){
    if(array[i] === array[i].toLowerCase()){
      if(array[i] !== slicedSmall[i]){
        return slicedSmall[i]
      }
    }else if(array[i] === array[i].toUpperCase()){
      if(array[i] !== slicedBig[i]){
        return slicedBig[i]
      }      
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']))