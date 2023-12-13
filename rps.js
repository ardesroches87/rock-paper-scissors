
const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
let playerInput = prompt("Choose rock, paper, or scissors");
let playerSelection = playerInput.toLowerCase();
console.log(`The player's selection is ${playerSelection}`);
return playerSelection;
};


function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() * choices.length))]
    console.log(`The computer's selection is ${result}`);
    return result;
};



function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
      // console.log(`The player's selection is ${playerSelection} and the computer's selection is ${computerSelection}`)
      // console.log("it's a tie, try again") 
      alert("it's a tie, try again");
      return "tie";
     } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
      // console.log("player won!")  
      alert("player won!");
      return "player won!";
     } else {
      // console.log("computer won!")  
      alert("computer won!");
      return "computer won!";
     }
    };



   let winners = [];
 function game() {
   
for (let i = 0; i <= 4; i++) {
   let myChoice = getPlayerChoice();
   let compChoice = getComputerChoice();
      winners.push(playRound(myChoice, compChoice));

      console.log(winners);

}
      let numPlayerWins = winners.filter(score => score === "player won!").length;
      let numComputerWins = winners.filter(score => score === "computer won!").length;
      

      if (numPlayerWins > numComputerWins) {
         alert("you won the round, HELL YEAH!"); 
         return "you won the round,  HELL YEAH!";
      } else if (numComputerWins > numPlayerWins) {
         alert("you lost the round! computer won!");
         return "you lost the round! computer won!";
      } else {
         alert("it's a tied round, try again");
         return "it's a tied round, try again";
      }
      
   }

     game();