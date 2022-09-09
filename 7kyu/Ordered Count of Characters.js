// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


//My solution
var orderedCount = function (text) {
    let str = text.split("")
    let uniqs = str.filter((letter, index) => str.indexOf(letter) == index)
    
    return uniqs.map((x) => [x, text.split(x).length - 1])
  }
  
  console.log(orderedCount('abracadabra'))