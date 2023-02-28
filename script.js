function getCompChoice() {
    const getNum = Math.floor(Math.random() * 3) +1;
        if (getNum % 3 === 0) {
            return 'rock';
        }
        else if (getNum % 3 === 1) {
            return 'paper';
        }
        else {return 'scissors'}
}

function playRound(playerSelection, compSelection) {

    playerSelection = prompt ('rock, paper, or scissors?');
    //delete line 14 to get rid of prompt and play entirely in the console by specifying parameters within function call
    //i kind of like it tho? 
    compSelection = getCompChoice();
        if (playerSelection === compSelection) {
            result = console.log(`Tie game on round ${round}!  Draw again`)
        }
        else if (playerSelection === 'rock' && compSelection === 'paper') {
            result = console.log(`You lose round ${round}!  Paper beats rock!`);
            compScore++;
        }
        else if (playerSelection === 'rock' && compSelection === 'scissors') {
            result = console.log(`You win round ${round}!  Rock beats scissors!`);
            playerScore++;
        }
        else if (playerSelection === 'paper' && compSelection === 'rock') {
            result = console.log(`You win round ${round}!  Paper beats rock!`);
            playerScore++;
        }
        else if (playerSelection === 'paper' && compSelection === 'scissors') {
            result = console.log(`You lose round ${round}!  Scissors beat paper!`);
            compScore++;
        }
        else if (playerSelection === 'scissors' && compSelection === 'paper') {
            result = console.log(`You win round ${round}!  Scissors beat paper!`);
            playerScore++;
        }
        else if (playerSelection === 'scissors' && compSelection === 'rock') {
            result = console.log(`You lose round ${round}!  Rock beats scissors!`);
            compScore++;
        }
        else {
            result = console.log('Invalid selection - Try again.')
        
        }
}

const compSelection = getCompChoice;



function game() {
    playRound();
    ++round; 
}

let playerScore =0;
let compScore = 0;
let round = 1;


while(playerScore < 5 && compScore < 5) {
    // your code here!
    game();
    console.log(`Player: ${playerScore}   Computer: ${compScore}`);
    scoreReport();
   }

function scoreReport () {
    if (playerScore == 5 && compScore < 5) {
        console.log('Congratulations!!! You won!!!')
    }
    if (compScore == 5 && playerScore <5) {
        console.log('You lost! Try again?')
    }
}

   //add equalsIgnoreCase() to strings to make lowercase, UPPERCASE, and mIxEd entries work.
   //game now goes until someone wins 5 rounds
   //code in a start game function 
   //code in a new game option 