const PAPER = "paper"
const ROCK = "rock"
const SCISSORS = "scissors"
let choice = [PAPER, ROCK, SCISSORS];

function getComputerChoice () {
    const randomValue = Math.floor(Math.random() * choice.length);
    return choice[randomValue];
}


 function humanChoice() {
    return prompt("your choice:");
 }



 function play(computerValue, humanValue) {
     if (computerValue === humanValue) 
         return("draw");
     else if ((computerValue === SCISSORS && humanValue === ROCK) ||
        (computerValue === ROCK && humanValue === PAPER) ||
        (computerValue === PAPER && humanValue === SCISSORS)) {
        return ("win");
        }
    else
        return ("lose");
 }

 while(true) {
let computerValue = getComputerChoice();
let humanValue = humanChoice();
let result = play(computerValue,humanValue);
if (humanValue === "exit") break;
console.log(`Your choice:${humanValue}. Computer choice:${computerValue}.`)
console.log(result);
}
