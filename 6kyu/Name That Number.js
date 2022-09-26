// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"

// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!


//My solution
function nameThatNumber(num) {
    // Your solution goes here. Have fun!
    const alpha = ['one','two','three','four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const beta = ['twenty','thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let str = String(num)
    let name = ''
    if(num === 0){
      return 'zero'
    }
    if(num <= 19){
      name = alpha[num-1]
    }else if(num%10 === 0){
      name = beta[(num/10) - 2]
    }else{
      str.split('')  
      name = `${beta[str[0]-2]} ${alpha[str[1]-1]}`    
    }
    return name
  }
  
  console.log(nameThatNumber(0))