// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//My solution
function reverse(str){
    //WRITE SOME MAGIC
    if(str.length < 1){
      return ''
    }
    let arr = str.split(' ').map(x => x.split(''))
    for(i=0;i<arr.length;i++){
      if(i%2 !== 0){
        arr[i].reverse()
      }
    }
    return arr.map(x => x.join('')).join(' ').trim()
  }
  
  console.log(reverse(" "))