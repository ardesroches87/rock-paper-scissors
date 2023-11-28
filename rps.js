//Assign 1 variable as rock
//Assign 1 variable as paper
//Assign 1 variable scissors --- made an array instead
//Assign values to each variable (what beats what) -- if...else if?
//Prompt user to choose one of the variables (rock, paper, or scissors) - OK
//Input from computer to randomly choose a variable - OK
//Compare the inputted variables and decide which is the winner- ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper"))
//Notify the winner "you won" (notify loser "you lost")
//Ask to play again

const choices = ["rock", "paper", "scissors"];

let playerInput = prompt("Choose rock, paper, or scissors");

let playerSelection = playerInput.toLowerCase();
console.log(playerSelection);

function getComputerChoice() {
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
getComputerChoice();


let computerSelection = getComputerChoice;

//this fxn isnt working, it's constantly saying it's a tie no matter what, so the if/else ifs have a problem
function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        alert("it's a tie, try again");
     } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        alert("player won!");
     } else {
        alert("computer won!");
     }
    }

     playRound();

     
