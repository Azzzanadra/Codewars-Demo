// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59


//My solution
function past(h, m, s){
    //#Happy Coding! ^_^
    if(h > 24 || m > 59 || s > 59){
      return
    }
    let millisec = 1000*s
    let millimin = millisec + (1000*60*m)
    let millihour = millimin + (1000*60*60*h)
    
    return millihour
  }
  console.log(past(1,1,1))