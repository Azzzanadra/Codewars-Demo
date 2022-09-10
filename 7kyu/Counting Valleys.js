// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN

// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/

// So here we passed one valley


//My solution
function countingValleys(s) {
    //here we go again
    let valley = 0;
    let step = 0;
    const arr = s.split('')
    for(i=0;i<arr.length;i++){
      if(arr[i] === 'F'){
        step += 0;
      }else if(arr[i] === 'U'){
        if(step === -1){
          valley ++
        }
        step ++
      }else if(arr[i] === 'D'){
        step --
      }
    }
    return valley
  }
  
  console.log(countingValleys('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'))