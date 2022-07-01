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
    if  (p === c) {
        console.log(`${p} matches ${c}. Tie!`);
        return 0;
    }    if (p === "rock" && c === "paper") {
        console.log( "Rock loses to Paper. You lose..."); 
        return -1;
    }   if (p === "rock" && c === "scissors") {
        console.log( "Rock beats Scissors. You win!");
        return 1;
    }   if (p === "paper" && c === "scissors") {
        console.log( "Paper Loses to Scissors. You lose...");
        return -1;
    }   if (p === "paper" && c === "rock") {
        console.log( "Paper beats Rock. You win!");
        return 1;
    }   if (p === "scissors" && c === "paper") {
        console.log( "Scissors beats Paper. You win!");
        return 1;
    }   if (p === "scissors" && c === "rock") {
        console.log( "Scissors loses to Rock. You lose.");
        return -1;
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
        if (round === 0) {
            i--;
        }
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
}

game()