// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


//My solution
function count (string) {  
    // The function code should be here
     let counts = {}
     let arr = string.split('')
     arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts
  }
  
  console.log(count('abdoman'))