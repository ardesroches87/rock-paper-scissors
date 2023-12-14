
const choices = ["rock", "paper", "scissors"];

// function getPlayerChoice() {
// let playerInput = prompt("Choose rock, paper, or scissors");
// let playerSelection = playerInput.toLowerCase();
// console.log(`The player's selection is ${playerSelection}`);
// return playerSelection;
// };
let results = document.querySelector('#results');


function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() * choices.length))]
    console.log(`The computer's selection is ${result}`);
    return result;
};
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
      // console.log(`The player's selection is ${playerSelection} and the computer's selection is ${computerSelection}`)
      console.log("it's a tie, try again");
      return "tie";
     } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
      console.log("player won!");  
      return "player won!";
     } else {
      console.log("computer won!");
      return "computer won!";
     }
    };

    let winners = [];

    function game(playerSelection, computerSelection) {
     console.log(playerSelection);
     console.log(computerSelection);
      
      winners.push(playRound(playerSelection, computerSelection));
   
      let numPlayerWins = winners.filter(score => score === "player won!").length;
      let numComputerWins = winners.filter(score => score === "computer won!").length;
   
   console.log(numPlayerWins);
      console.log(numComputerWins);
      const para = document.createElement('p');

      if (numPlayerWins < 5 && numComputerWins < 5) {
        para.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. You have ${numPlayerWins} points and the computer has ${numComputerWins} points.`;
      } else if (numPlayerWins === 5 && numComputerWins < 5) {
         para.textContent = `You win!: ${numPlayerWins} - ${numComputerWins}`;
      } else if (numPlayerWins < 5 && numComputerWins === 5) {
         para.textContent = `You lose! Computer wins!: ${numComputerWins} - ${numPlayerWins}`;
      }
      results.insertAdjacentElement('afterbegin', para);

   }



const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
   game("rock", getComputerChoice())
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
   game("paper", getComputerChoice())
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
   game("scissors", getComputerChoice())
});

 
      

      // if (numPlayerWins > numComputerWins) {
      //    alert("you won the round, HELL YEAH!"); 
      //    return "you won the round,  HELL YEAH!";
      // } else if (numComputerWins > numPlayerWins) {
      //    alert("you lost the round! computer won!");
      //    return "you lost the round! computer won!";
      // } else {
      //    alert("it's a tied round, try again");
      //    return "it's a tied round, try again";
      // }
      
   

     