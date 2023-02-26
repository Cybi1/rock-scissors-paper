const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
const CHOICES = [PAPER, ROCK, SCISSORS];

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomValue];
}

function gethumanChoice() {
  return prompt("your choice:");
}

function checkHumanWin(computerValue, humanValue) {
  return (
    (computerValue === SCISSORS && humanValue === ROCK) ||
    (computerValue === ROCK && humanValue === PAPER) ||
    (computerValue === PAPER && humanValue === SCISSORS)
  );
}

function play(computerValue, humanValue) {
  if (computerValue === humanValue) return("draw");
  if (checkHumanWin(computerValue, humanValue)) return ("win");

  return ("lose");
}

while(true) {
  let computerValue = getComputerChoice();
  let humanValue = gethumanChoice();
  let result = play(computerValue, humanValue);
  if (humanValue === "exit") break;
  console.log(`Your choice: ${humanValue}. Computer choice: ${computerValue}.`);
  console.log(result);
}
