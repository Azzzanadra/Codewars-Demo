// A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

// Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

// If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

// Ex n = 10

// Twin Primes are (3,5) (5,7) so your function should return 2!


//My solution
function isPrime(num){
    let s = Math.sqrt(num)
    for(let i=2;i<=s;i++){
      if(num%i === 0){
        return false
      }
    }
    return num > 1
  }
  
  function twinPrime(n) {
    let sum = 0
    for(let i=1;i<=n-1;i++){
      if(isPrime(i) && isPrime(i+2)) sum++
    }
    return sum
  }
  
  console.log(twinPrime(12))