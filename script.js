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
            resultTie = console.log('tie game! draw again')
        }
        else if (playerSelection === 'rock' && compSelection === 'paper') {
            resultLoss = console.log('you lose! paper beats rock! Score: ');
            ++compScore;
        }
        else if (playerSelection === 'rock' && compSelection === 'scissors') {
            resultWin = console.log('you win! rock beats scissors!');
            ++playerScore
        }
        else if (playerSelection === 'paper' && compSelection === 'rock') {
            resultWin = console.log('you win! paper beats rock!');
            ++playerScore
        }
        else if (playerSelection === 'paper' && compSelection === 'scissors') {
            resultLoss = console.log('you lose! scissors beat paper!');
            ++compScore
        }
        else if (playerSelection === 'scissors' && compSelection === 'paper') {
            resultWin = console.log('you win! scissors beat paper!');
            ++playerScore
        }
        else if (playerSelection === 'scissors' && compSelection === 'rock') {
            resultLoss = console.log('you lose! rock beats scissors!');
            ++compScore;
        }
        else {
            resultInvalid = console.log('invalid selection - try again.')
        
        }
}

const compSelection = getCompChoice;




function game() {
    playRound();
    ++round; 
}

let playerScore = 0;
let compScore = 0;
let round = 0;

function winCounter (playerScore, compScore) {
    if (playerScore > compScore) {
        console.log(++playScore);
    }
    else if (compWin === resultLoss) {
        console.log(++compScore);
    }
    else {
        console.log('invalid selection')
    }
}


for (let i = 1; i < 6; i++) {
    // your code here!
    game();
    console.log(i);
   }