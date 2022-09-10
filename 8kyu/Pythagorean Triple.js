// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:
// c2 = a2 + b2

// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
// Return Values

//     1 if a, b and c form a pythagorean triple
//     0 if a, b and c do not form a pythagorean triple
//     For Python: return True or False
//     For JavaScript: return true or false


//My solution
function isPythagoreanTriple(first) {
    // Good luck friends!
    let integers = first.sort(function(a,b) { return a-b})
    if(Math.pow(integers[2],2) === Math.pow(integers[1],2) + Math.pow(integers[0],2)){
      return true
    }else{
      return false
    }
  }
  
  console.log(isPythagoreanTriple([72, 78, 30]))