// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)


//My solution
reverse = function(array) {
    let arr2 = []
    for(i=0;i<array.length;i++){
      arr2.push(array[array.length-1-i])
    }
    return arr2
}