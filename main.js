function randomNumber() {
    return Math.floor(Math.random() * 3);
    }


function computerPlay() {
    if (pick == 0) {
        return "rock";
    } else if (pick == 1) {
        return "paper";
    } else if (pick == 2) {
        return "scissors";
    }
}

const pick = randomNumber();


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "Rock loses to Paper. You lose...";
    }   else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Rock beats Scissors. You win!";
    }   else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Rock matches Rock. Its a tie!";
    }   else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Paper matches Paper. Its a tie!";
    }   else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Paper Loses to Scissors. You lose...";
    }   else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper beats Rock. You win!";
    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beats Paper. You win!";
    }   else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Scissors matches Scissors. Its a tie!";
    }   else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Scissors loses to Rock. You lose.";
}
}



const computerSelection = computerPlay();

const playerSelection = prompt("Choose your weapon: rock, paper, scissors").toLowerCase();

console.log(playRound(playerSelection, computerSelection)); 



