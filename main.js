const choices = ["rock","paper","scissors"]

function game (){
playRound();
}

function playRound(){
const playerSelection = playerChoice()
const computerSelection = computerChoice()
}

//player can't break function
function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
}
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == true) {
        console.log(input);
    }
}

function computerChoice(){
    //get random inout for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    if (choices.includes(choice)) {
        return true;
    } 
    return false;
}


game();