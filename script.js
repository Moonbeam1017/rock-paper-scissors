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
//delete line 14 to get rid of prompt - i kind of like it tho? also is it still fully functional?
    compSelection = getCompChoice();
        if (playerSelection === compSelection) {
            result = console.log(`tie game on round ${round}! draw again`)
        }
        else if (playerSelection === 'rock' && compSelection === 'paper') {
            result = console.log(`you lose round ${round}! paper beats rock!`);
            compScore++;
        }
        else if (playerSelection === 'rock' && compSelection === 'scissors') {
            result = console.log(`you win round ${round}! rock beats scissors!`);
            playerScore++;
        }
        else if (playerSelection === 'paper' && compSelection === 'rock') {
            result = console.log(`you win round ${round}! paper beats rock!`);
            playerScore++;
        }
        else if (playerSelection === 'paper' && compSelection === 'scissors') {
            result = console.log(`you lose round ${round}! scissors beat paper!`);
            compScore++;
        }
        else if (playerSelection === 'scissors' && compSelection === 'paper') {
            result = console.log(`you win round ${round}! scissors beat paper!`);
            playerScore++;
        }
        else if (playerSelection === 'scissors' && compSelection === 'rock') {
            result = console.log(`you lose round ${round}! rock beats scissors!`);
            compScore++;
        }
        else {
            result = console.log('invalid selection - try again.')
        
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
        console.log('Congratulations! You won!')
    }
    if (compScore == 5 && playerScore <5) {
        console.log('You lost! Try again?')
    }
}

   //add equalsIgnoreCase() to strings to make lowercase, UPPERCASE, and mIxEd entries work.
   //game now goes until someone wins 5 rounds
   //code in a start game function 
   //code in a win/loss prompt once someone reaches 5 points
   //code in a new game option 