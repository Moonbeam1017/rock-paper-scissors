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
    compSelection = getCompChoice();
        if (playerSelection === compSelection) {
            return alert('tie game! draw again')
        }
        else if (playerSelection === 'rock' && compSelection === 'paper') {
            return alert('you lose! paper beats rock!')
        }
        else if (playerSelection === 'rock' && compSelection === 'scissors') {
            return alert('you win! rock beats scissors!')
        }
        else if (playerSelection === 'paper' && compSelection === 'rock') {
            return alert('you win! paper beats rock!')
        }
        else if (playerSelection === 'paper' && compSelection === 'scissors') {
            return alert('you lose! scissors beat paper!')
        }
        else if (playerSelection === 'scissors' && compSelection === 'paper') {
            return alert('you win! scissors beat paper!')
        }
        else if (playerSelection === 'scissors' && compSelection === 'rock') {
            return alert('you lose! rock beats scissors!')
        }
        else {
            return alert('invalid selection - try again.')
        }
}

const compSelection = getCompChoice;
