// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


//My solution
function toCamelCase(str){
    let arr = []
    if(str.includes('-')){
      arr = str.split('-')
    }else if(str.includes('_')){
      arr = str.split('_')
    }
    return arr.map((x,i) => i === 0 ? x : x.replace(x[0],x[0].toUpperCase())).join('')
  }
  
  console.log(toCamelCase("the_stealth_warrior"))