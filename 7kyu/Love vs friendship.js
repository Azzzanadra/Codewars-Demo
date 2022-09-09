// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


//My solution
function wordsToMarks(string){
    //your code here
    let arr = string.split('')
    for (i=0;i<arr.length;i++){
      arr[i] = arr[i].toLowerCase().charCodeAt() - 96
    }
    return arr.reduce((acc,val) => acc + val,0)
  }
  
  console.log(wordsToMarks("Attitude"))