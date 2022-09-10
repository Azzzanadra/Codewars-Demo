// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


//My solution
function nextId(ids){
    //this will be awesome!
    let num = 0
    while(ids.includes(num)){
      num++
    }
    return num
  }
  
  console.log(nextId([0,1,2,3,5]))