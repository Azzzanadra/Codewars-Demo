// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
// find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


//My solution
function findUniq(arr) {
    // do magic
    let repeat = {}
    arr.forEach(element =>{
      repeat[element] = (repeat[element] || 0) + 1;
    });
    for(key in repeat){
      if(repeat[key] === 1){
        return parseFloat(key)
      }
    }
  }
  
  console.log(findUniq([ 3, 10, 3, 3, 3 ]))