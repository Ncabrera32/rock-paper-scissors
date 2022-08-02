const choices = ["rock","paper","scissors"]

function game (){
playRound();
}

function playRound(){
const playerSelection = playerChoice()
const computerSelection = computerChoice()
const winner =checkWinner(playerSelection, computerSelection)
console.log(winner);
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
    }
    return input;
}

function computerChoice(){
    //get random inout for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper")
       ) {
       return "Player";
       } else {   
        return "Computer"
    }
}
game();