// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//My solution
function cleanString(s) {
    let arr = []
    for(i=0;i<s.length;i++){
      if(s[i] === '#'){
        arr.pop()
      }else{
        arr.push(s[i])
      }
    }
    return arr.join('')
  }
  
  console.log(cleanString('abc#d##c'))