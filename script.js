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
        if (playerChoice === compSelection) {
            textOutput.textContent = `Tie game on round ${round}!  Draw again.`;    //how do i make scoreReport show up underneath this
                                                                                    //use the same format as textOutput.textContent except make
                                                                                    //another one to display scoreReport and scoreUpdate
                                                                                    //replace the corresponding console.logs with the div tags from the HTML
            
        }
        else if (playerChoice === 'rock' && compSelection === 'paper') {
            textOutput.textContent = `You lost round ${round}!  Paper beats rock!`;
            compScore++;
        }
        else if (playerChoice === 'rock' && compSelection === 'scissors') {
            textOutput.textContent = `You won round ${round}!  Rock beats scissors!`;
            playerScore++;
        }
        else if (playerChoice === 'paper' && compSelection === 'rock') {
            textOutput.textContent = `You won round ${round}!  Paper beats rock!`;
            playerScore++;
        }
        else if (playerChoice === 'paper' && compSelection === 'scissors') {
            textOutput.textContent = `You lost round ${round}!  Scissors beat paper!`;
            compScore++;
        }
        else if (playerChoice === 'scissors' && compSelection === 'paper') {
            textOutput.textContent = `You won round ${round}!  Scissors beat paper!`;
            playerScore++;
        }
        else if (playerChoice === 'scissors' && compSelection === 'rock') {
            textOutput.textContent = `You lost round ${round}!  Rock beats scissors!`;
            compScore++;
        }
        else {
            textOutput.textContent = 'Invalid selection - Try again.'
        
        }
}


const buttons = document.querySelectorAll(`button`);
                              //this sets a click event listener that gets the button id of the clicked and sets it as a parameter for the playround function 
                              //it also gets the comp choice for the other parameter, it then plays a round, reports the score, checks if the game has been won, and increments the round if not.
buttons.forEach((button) => { //this function was critical - understanding this syntax was crucial
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const compSelection = getCompChoice();
        playRound(playerChoice, compSelection);
        scoreOutput.textContent = `Player: ${playerScore}   Computer: ${compScore}`;
          scoreReport();
          round++;
    });
});

function scoreReport () {
    if (playerScore == 5 && compScore < 5) {
        finalScore.textContent = `Congratulations!!! You won!!!`;
            playerScore = 0;
            compScore = 0;
            round = 0;
    }
    else if (compScore == 5 && playerScore < 5) {
        finalScore.textContent = `You lost! Try again?`;
            playerScore = 0;
            compScore = 0;
            round = 0;
    }
    else {
        finalScore.textContent = ``; //why does this only work for a loss??
                                     // should i make 2 seperate functions? that sounds redundant
    }
};


const textOutput = document.querySelector('#text-content')
const scoreOutput = document.querySelector('#score-update')
const finalScore = document.querySelector('#score-report') //should all instances of query selectors be grouped together for readability?


let playerScore =0;
let compScore = 0;
let round = 1;  //should all global constants be grouped together for readability?

    //need to end the game once someone wins and add a play again option - not sure how to do this
    //why is my while loop not working here anymore.. it is infinitely looping/crashing the browser
    //need to understand callbacks**
