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
//generates random computer choice of either 'rock', 'paper', or 'scissors' 



function playRound(playerChoice, compSelection) {
//should these parameter names match the ones in the event listener
    compSelection = getCompChoice();  //does this need to be here? why or why not? my answer would be no becasue the parameters get filled in when a selection is made
        if (playerChoice === compSelection) {
            result = console.log(`Tie game on round ${round}!  Draw again.`) //need to change console.logs to DOM methods
        }
        else if (playerChoice === 'rock' && compSelection === 'paper') {
            result = console.log(`You lose round ${round}!  Paper beats rock!`);
            compScore++;
        }
        else if (playerChoice === 'rock' && compSelection === 'scissors') {
            result = console.log(`You win round ${round}!  Rock beats scissors!`);
            playerScore++;
        }
        else if (playerChoice === 'paper' && compSelection === 'rock') {
            result = console.log(`You win round ${round}!  Paper beats rock!`);
            playerScore++;
        }
        else if (playerChoice === 'paper' && compSelection === 'scissors') {
            result = console.log(`You lose round ${round}!  Scissors beat paper!`);
            compScore++;
        }
        else if (playerChoice === 'scissors' && compSelection === 'paper') {
            result = console.log(`You win round ${round}!  Scissors beat paper!`);
            playerScore++;
        }
        else if (playerChoice === 'scissors' && compSelection === 'rock') {
            result = console.log(`You lose round ${round}!  Rock beats scissors!`);
            compScore++;
        }
        else {
            result = console.log('Invalid selection - Try again.')
        
        }
}

const compSelection = getCompChoice; // does this need to be here? why or why not? same reasoning as above - think not


const buttons = document.querySelectorAll(`button`);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getCompChoice();
        playRound(playerChoice, computerChoice);  // should these parameters be the same as the ones in the playRound function above?
        console.log(`Player: ${playerScore}   Computer: ${compScore}`);
          scoreReport();
          round++;
    });
});

function scoreReport () {
    if (playerScore == 5 && compScore < 5) {
        console.log('Congratulations!!! You won!!!')
            playerScore = 0;
            compScore = 0;
            round = 0;
    }
    if (compScore == 5 && playerScore < 5) {
        console.log('You lost! Try again?')
            playerScore = 0;
            compScore = 0;
            round = 0;
    }
};

let playerScore =0;
let compScore = 0;
let round = 1;



    //why is my while loop not working here anymore.. it is infinitely looping/crashing the browser
    //how to end the game when someone hits a score of 5 - i basiclally did this, right?


   //old notes:
   //add equalsIgnoreCase() to strings to make lowercase, UPPERCASE, and mIxEd entries work.
   //game now goes until someone wins 5 rounds
   //code in a start game function 
   //code in a new game option 
   //code in a line that cancels the game when player clicks cancel