// rock paper scissors function game// function which holds the game moves, in an array
function gameMoves() {
  // array containing rock, paper, scissors
  let rockPaperScissorsMoves = ["rock", "paper", "scissors"];
  // generate random element based on the length of the rock, paper, scissors array
  let randomNumber = Math.floor(Math.random() * rockPaperScissorsMoves.length);
  // variable called random guess puts the random number value into the index of the rock paper scissors array
  let randomGuess = rockPaperScissorsMoves[randomNumber];

  // const options = ["rock", "paper", "scissors"];
  //const compGuess = options[Math.floor(Math.random()* 3)];

  return randomGuess;
} // generate random computer guess using the game moves function

function computerMove() {
  return gameMoves();
} // find winner function, which compares the main winning values and returns 1
// returns 0 if playerguess is equal to computerguess

function findWinner(playerGuess, computerGuess) {
  if (playerGuess === computerGuess) return 0;
  if (playerGuess === "paper" && computerGuess === "rock") return 1;
  if (playerGuess === "scissors" && computerGuess === "paper") return 1;
  if (playerGuess === "rock" && computerGuess === "scissors") return 1;
}

// result -
// finderwinner function is stored in a variable
// prints “you drawed” if result is = 0
// prints “you won” if your result is = 1
// else, well the computer won (damn!)
const cMove = computerMove();
const result = findWinner("paper", cMove);
const text =
  result === 0
    ? "you drawed"
    : result === 1
    ? `you won`
    : `the computer won with: ${cMove}`;
console.log(text);

//michael

const readline = require("readline").createInterface({
  //Copied from stack overflow
  input: process.stdin,
  output: process.stdout,
});

const game = (choice) => {
  const results = {
    rock: { beats: "scissors" },
    paper: { beats: "rock" },
    scissors: { beats: "paper" },
  };

  const keys = Object.keys(results);
  const comp = keys[Math.floor(Math.random() * keys.length)];

  console.log(`You chose ${choice} and the computer chose ${comp}`);
  results[choice].beats === comp && console.log("you win");
  choice === comp && console.log("you drew");
  results[comp].beats === choice && console.log("you loose");
};

readline.question("Choose your option: rock, paper, scissors: ", (choice) => {
  game(choice);
  readline.close();
});

//sam

function go(playerChoice) {
  let array = [
    {
      name: "rock",
      weakness: "paper",
      strength: "scissors",
    },
    {
      name: "paper",
      weakness: "scissors",
      strength: "rock",
    },
    {
      name: "scissors",
      weakness: "rock",
      strength: "paper",
    },
  ];

  let computerChoice = array[Math.floor(Math.random() * 2)];
  if (playerChoice === computerChoice.strength) {
    console.log(
      `Player chose ${playerChoice} and computer chose ${computerChoice.name} Computer Wins`
    );
  } else if (playerChoice === computerChoice.weakness) {
    console.log(
      `Player chose ${playerChoice} and computer chose ${computerChoice.name}. Player loses`
    );
  } else {
    console.log(
      `Player chose ${playerChoice} and computer chose ${computerChoice.name} it is a draw`
    );
  }
}
go("rock");

//reeta refined
function go(playerChoice) {
  let plays = ["rock", "paper", "scissors"];
  let computerChoice = plays[Math.floor(Math.random() * plays.length)];

  if (playerChoice === computerChoice) console.log("Draw");

  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      console.log("Player wins");
      break;

    default:
      console.log("Computer wins");
      break;
  }
}

go("paper");

function go(playerChoice) {
  let plays = ["rock", "paper", "scissors"];
  let playerWins = ["rockscissors", "scissorspaper", "paperrock"];
  let computerChoice = plays[Math.floor(Math.random() * plays.length)];

  if (playerChoice === computerChoice) {
    console.log("Draw");
    return;
  }

  if (playerWins.includes(playerChoice + computerChoice)) {
    console.log("Player wins");
  } else {
    console.log("Computer wins");
  }
}

go("paper");
