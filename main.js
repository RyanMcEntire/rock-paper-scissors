function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    const pick = randomNumber();
    if (pick == 0) {
        return "rock";
    } else if (pick == 1) {
        return "paper";
    } else if (pick == 2) {
        return "scissors";
    }
}

function playRound(p, c) {
    if (p == "rock" && c == "paper") {
        console.log( "Rock loses to Paper. You lose...") 
        return -1
    }   else if (p == "rock" && c == "scissors") {
        console.log( "Rock beats Scissors. You win!")
        return 1
    }   else if (p == "rock" && c == "rock") {
        console.log( "Rock matches Rock. Its a tie!")
        return 0
    }   else if (p == "paper" && c == "paper") {
        console.log( "Paper matches Paper. Its a tie!")
        return 0
    }   else if (p == "paper" && c == "scissors") {
        console.log( "Paper Loses to Scissors. You lose...")
        return -1
    }   else if (p == "paper" && c == "rock") {
        console.log( "Paper beats Rock. You win!")
        return 1
    }   else if (p == "scissors" && c == "paper") {
        console.log( "Scissors beats Paper. You win!")
        return 1
    }   else if (p == "scissors" && c == "scissors") {
        console.log( "Scissors matches Scissors. Its a tie!")
        return 0
    }   else if (p == "scissors" && c == "rock") {
        console.log( "Scissors loses to Rock. You lose.")
        return -1
    }
}

function game() {
    let pScore = 0;
    let cScore = 0;
    let results = 0;
    for (let i = 0; i < 5; i++) {
        const c = computerPlay();
        let p = prompt("Choose your weapon: rock, paper, scissors");
        p = p.toLowerCase();
        const round = playRound(p,c);
        results = results + round;
        if (round > 0) {
            pScore++;
        }   
        if (round < 0) {
            cScore++;
        }
    }

    console.log("The match is over!", pScore, cScore);
    if (results > 0) {
        console.log("You won!");
    }   
    if (results < 0) {
        console.log("You lost!");
    }
    if (results === 0) {
        console.log("It was a tie. Better luck next time...")
    }
}

game()