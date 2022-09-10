// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eq_sum_powdig(100, 2) ----> []

// eq_sum_powdig(1000, 2) ----> []

// eq_sum_powdig(200, 3) ----> [153]

// eq_sum_powdig(370, 3) ----> [153, 370]

// Enjoy it !!


//My solution
function eqSumPowdig(hMax, exp) {
    // Your code here
    let arr = []
    if(hMax < 153){
      return arr
    }
    for(let i=153;i<=hMax;i++){
      let pat = i.toString()
      let  sum = 0
      
      for(let j=0;j<pat.length;j++){
        sum += Math.pow(parseInt(pat[j]),exp)
      }
      if(sum === i){
        arr.push(sum)
      }
    }
    return arr
  }
  
  console.log(eqSumPowdig(100, 2))