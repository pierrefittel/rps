function computerPlay () {
    let computerSelection = '';
    let selection = Math.floor(Math.random() * 2);
    if (selection === 0) {
        computerSelection = 'rock';
    } else if (selection === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissor';
    }
    console.log(`Computer choses ${computerSelection}`);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let winner = '';
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        winner = 'computer';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        winner = 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        winner = 'computer';
    } else if (playerSelection === computerSelection) {
        winner = 'draw'
    } else {
        winner = 'player';
    }
    return winner;
}

/*

function game() {
    for (let i = 0; i < 5; i++) { 
    }
}
*/

const playerSelection = prompt('Chose rock, paper or scissor: ');
const computerSelection = computerPlay();
console.log('The winner is ' + playRound(playerSelection, computerSelection));