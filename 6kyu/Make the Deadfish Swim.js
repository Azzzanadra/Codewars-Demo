// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso")  ==>  [8, 64]


//My solution
function parse( data )
{
  let arr = []
  let count = 0
  let str = data.split('').forEach(x =>{
    switch(x){
        case 'i': 
          count++ 
          break;
        case 'd': 
          count-- 
          break;
        case 's': 
          count*=count 
          break;
        case 'o': 
          arr.push(count) 
          break;
    }
  })
  return arr
}

console.log(parse("iiisdoso"))