// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.

// See example:

//     Input:

//     [5, 10, 6]  >>> This represents:
//                # citizen 1 has wealth 5
//                # citizen 2 has wealth 10
//                # citizen 3 has wealth 6

//     Should be after the test:

//      [7, 7, 7] >>> wealth has now been equally redistributed

// Info:

//     MUTATE the input array/list, don't return anything
//     Input is guaranteed to hold at least 1 citizen
//     Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
//     Handling of floating point error will not be tested

//My solution
function redistributeWealth(wealth) {
    // Mutate wealth
    let sum = 0;
    let avg = 0;
    
    for(i=0;i<wealth.length;i++){
      sum += wealth[i];
    }
    avg = sum / wealth.length;
    for(i=0;i<wealth.length;i++){
      wealth[i] = avg;
    }
  }
  
  redistributeWealth([7,7,7,5,5])