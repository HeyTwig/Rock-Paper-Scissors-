function getComputerChoice() {
// Pick a number between 0 to 2
  const randomChoice = Math.floor(Math.random() * 3);
// Assign the number with either rock,paper, or scissor
// Return the result
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {

  //Makes playerSelection parameter case-insensitive
  let playerChoice = playerSelection.toLowerCase();

  // If you and the computer pick the same, it's a tie
  if (playerChoice === computerSelection) {
    return "It's a tie! Go Again";
  }
  // If you chose rock and they chose paper, you win
  else if (playerChoice === "rock" && computerSelection === "paper") {
    return "You Lose! Rock lose to Paper";
  }
  // If you chose rock and they chose scissor, you lose
  else if (playerChoice === "rock" && computerSelection === "scissor") {
    return "You Win! Rock beats Scissor";
  }
  // If you chose paper and they chose rock, you win
  else if (playerChoice === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  }
  // If you chose paper and they chose scissor, you lose
  else if (playerChoice === "paper" && computerSelection === "scissor") {
    return "You Lose! Paper lose to Scissor";
  }
  // If you chose scissor and they chose paper, you win
  else if (playerChoice === "scissor" && computerSelection === "paper") {
    return "You Win! Scissor beats Paper";
  }
  // If you chose scissor and they chose rock, you lose
  else if (playerChoice === "scissor" && computerSelection === "rock") {
    return "You Lose! Scissor lose to Rock";
  }
}


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));



function game() {
  // create a counter for both the computer and the player
  let playerCounter = 0;
  let computerCounter = 0;
  // For loop the function playRound
  for (let i = 0; i < 99; i++) {
    // create a prompt that take in your answer
    let playerSelection = prompt("Rock, Paper, or Scissor?");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    // After each round increase the count of the winner by one
    if (result.includes("You Win!")) {
      console.log(result)
      playerCounter++;
      console.log(`Player: ${playerCounter}`);
    } else if (result.includes("You Lose!")) {
      console.log(result)
      computerCounter++;
      console.log(`Computer: ${computerCounter}`);
    }
    // If tie, it prompt again with no changes to the counters
      else {
      console.log(result)
    }
    //It stops the loop after either the player or the computer gets 3 points
    if (playerCounter === 3 || computerCounter === 3) {
      break; 
    }
  }

  // After one of the counter reaches 3, it display a winner
  if (playerCounter === 3) {
    console.log("You won against the computer!");
    return;
  } else if (computerCounter === 3) {
    console.log("You lost against the computer :( Please Try Again");
    return;
  }
}

game();
