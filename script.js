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
            console.log('tie game! draw again')
        }
        else if (playerSelection === 'rock' && compSelection === 'paper') {
            console.log('you lose! paper beats rock! Score')
        }
        else if (playerSelection === 'rock' && compSelection === 'scissors') {
            console.log('you win! rock beats scissors!')
        }
        else if (playerSelection === 'paper' && compSelection === 'rock') {
            console.log('you win! paper beats rock!')
        }
        else if (playerSelection === 'paper' && compSelection === 'scissors') {
            console.log('you lose! scissors beat paper!')
        }
        else if (playerSelection === 'scissors' && compSelection === 'paper') {
            console.log('you win! scissors beat paper!')
        }
        else if (playerSelection === 'scissors' && compSelection === 'rock') {
            console.log('you lose! rock beats scissors!')
        }
        else {
            console.log('invalid selection - try again.')
        }
}

const compSelection = getCompChoice;




function game() {
    playRound();
}


for (let i = 1; i < 6; i++) {
    // your code here!
    game();
    console.log(i);
   }
 

if (compScore == 5) {
    alert('You lose!')
}

if (playerScore == 5) {
    alert('You Win!')
}