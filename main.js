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
    if ("rock", "paper") {
        return "You lose.";
    }   else if ("rock", "scissors") {
        return "You win!";
    }   else if ("rock", "rock") {
        return "Tie!"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound);
