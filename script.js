function getComputerChoice() {
// Pick a number between 0 to 2
  const randomChoice = Math.floor(Math.random() * 3);
// Assign the number with either rock,paper, or scissor
// Return the result
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

