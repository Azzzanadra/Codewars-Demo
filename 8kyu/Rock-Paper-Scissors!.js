// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


//My solution
const rps = (p1, p2) => {
    let n = 1;
    if((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')){
      return "Player " + n + " won!";
    }else if((p2 === 'rock' && p1 === 'scissors') || (p2 === 'scissors' && p1 === 'paper') || (p2 === 'paper' && p1 === 'rock')){
      n = 2;
      return `Player ${n} won!`;
    }else{
      return 'Draw!';
    }
  };
  console.log(rps("scissors","paper"))