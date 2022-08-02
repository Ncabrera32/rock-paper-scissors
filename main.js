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
    while (check == false) {
     input = prompt (
            "Type Rock, Paper, or Scissors. Spelling needs to be exact!"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
    }
        input = input.toLowerCase();
        check = validateInput(input);
        console.log(input);
    }
}

function computerChoice(){
    //get random inout for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
}


game();