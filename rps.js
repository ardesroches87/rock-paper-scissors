//Have 3 choices for computer (rock, paper, scissors)
//Get user to input choice
//Randomize computer choice
//Display user choice and computer choice
//Compare choices and decide which won
//Repeat 5 times
//Count number of wins each got
//Alert whoever has most wins as winner

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

   //  let firstPlayerChoice = getPlayerChoice();
   //  let firstComputerChoice = getComputerChoice();

   //  let secondPlayerChoice = getPlayerChoice();
   // let secondComputerChoice = getComputerChoice();

   // let thirdPlayerChoice = getPlayerChoice();
   //    let thirdComputerChoice = getComputerChoice();

   //    let fourthPlayerChoice = getPlayerChoice();
   //    let fourthComputerChoice = getComputerChoice();

   //    let fifthPlayerChoice = getPlayerChoice();
   //    let fifthComputerChoice = getComputerChoice();

 function game() {
   let winners = [];


   let firstPlayerChoice = getPlayerChoice();
   let firstComputerChoice = getComputerChoice();
      winners.push(playRound(firstPlayerChoice, firstComputerChoice));
      // console.log(playRound(firstPlayerChoice, firstComputerChoice));

      let secondPlayerChoice = getPlayerChoice();
      let secondComputerChoice = getComputerChoice();
      winners.push(playRound(secondPlayerChoice, secondComputerChoice));
      // console.log(playRound(secondPlayerChoice, secondComputerChoice));

      let thirdPlayerChoice = getPlayerChoice();
      let thirdComputerChoice = getComputerChoice();
      winners.push(playRound(thirdPlayerChoice, thirdComputerChoice));
      // console.log(playRound(thirdPlayerChoice, thirdComputerChoice));

      let fourthPlayerChoice = getPlayerChoice();
      let fourthComputerChoice = getComputerChoice();
      winners.push(playRound(fourthPlayerChoice, fourthComputerChoice));
      // console.log(playRound(fourthPlayerChoice, fourthComputerChoice));

      let fifthPlayerChoice = getPlayerChoice();
      let fifthComputerChoice = getComputerChoice();
      winners.push(playRound(fifthPlayerChoice, fifthComputerChoice));
      // console.log(playRound(fifthPlayerChoice, fifthComputerChoice));

      console.log(winners);

      let numPlayerWins = winners.filter(score => score === "player won!").length;
      let numComputerWins = winners.filter(score => score === "computer won!").length;
      

      if (numPlayerWins > numComputerWins) {
         alert("you won HELL YEAH!"); 
      } else if (numComputerWins > numPlayerWins) {
         alert("you lost! computer won!");
      } else {
         alert("it's a tie, try again");
      }
      }

     game();
     
