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
    return "You Win! Paper beats Rock"
  }
  // If you chose paper and they chose scissor, you lose
  else if (playerChoice === "paper" && computerSelection === "scissor") {
    return "You Lose! Paper lose to Scissor"
  }
  // If you chose scissor and they chose paper, you win
  else if (playerChoice === "scissor" && computerSelection === "paper") {
    return "You Win! Scissor beats Paper"
  }
  // If you chose scissor and they chose rock, you lose
  else if (playerChoice === "scissor" && computerSelection === "rock") {
    return "You lose! Scissor lose to Rock"
  }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
