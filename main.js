let playerScore = 0;
let computerScore = 0;
let round = 0;

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

const winLoseTie = document.querySelector("#winLoseTie");
const resetContainer = document.querySelector("#resultsBox");
const gameResults = document.querySelector("#gameResults");

const playerTally = document.querySelector("#ourScore");
const computerTally = document.querySelector("#theirScore");
playerTally.textContent = playerScore;
computerTally.textContent = computerScore;

function playRound(p, c) {
  if (round === 5) {
    pRock.disabled = true;
    pPaper.disabled = true;
    pScissors.disabled = true;
    playerTally.textContent = playerScore;
    computerTally.textContent = computerScore;

    if (playerScore > computerScore) {
      gameResults.textContent = `Congrats!, you won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    if (computerScore > playerScore) {
      gameResults.textContent = `Sorry, you lost this one... Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }

    console.log(round);
  }
  if (p === c) {
    winLoseTie.textContent = `${
      p.charAt(0).toUpperCase() + p.slice(1)
    } matches ${c.charAt(0).toUpperCase() + c.slice(1)}. Tie!`;
    return 0;
  }
  if (p === "rock" && c === "paper") {
    winLoseTie.textContent = "Rock loses to Paper. You lose...";
    computerTally.textContent = computerScore;
    round++;
    return computerScore++;
  }
  if (p === "rock" && c === "scissors") {
    winLoseTie.textContent = "Rock beats Scissors. You win!";
    playerTally.textContent = playerScore;
    round++;
    return playerScore++;
  }
  if (p === "paper" && c === "scissors") {
    winLoseTie.textContent = "Paper Loses to Scissors. You lose...";
    computerTally.textContent = computerScore;
    round++;
    return computerScore++;
  }
  if (p === "paper" && c === "rock") {
    winLoseTie.textContent = "Paper beats Rock. You win!";
    playerTally.textContent = playerScore;
    round++;
    return playerScore++;
  }
  if (p === "scissors" && c === "paper") {
    winLoseTie.textContent = "Scissors beats Paper. You win!";
    playerTally.textContent = playerScore;
    round++;
    return playerScore++;
  }
  if (p === "scissors" && c === "rock") {
    winLoseTie.textContent = "Scissors loses to Rock. You lose.";
    computerTally.textContent = computerScore;
    round++;
    return computerScore++;
  }
}
const pRock = document.querySelector("#pRock");
const pPaper = document.querySelector("#pPaper");
const pScissors = document.querySelector("#pScissors");

const pClicked = document.getElementById("pBox");
pClicked.addEventListener("click", (e) => {
  const c = computerPlay();
  let p = e.target.value;
  playRound(p, c);
});

/*
const pRock = document.querySelector("#rock");
pRock.addEventListener("click", () => {
  const c = computerPlay();
  let p = pRock.value;
  playRound(p, c);

  console.log(p, c);
});

const pPaper = document.querySelector("#paper");
pPaper.addEventListener("click", () => {
  const c = computerPlay();
  let p = pPaper.value;
  playRound(p, c);

  console.log(p, c);
});

const pScissors = document.querySelector("#scissors");
pScissors.addEventListener("click", () => {
  const c = computerPlay();
  let p = pScissors.value;
  playRound(p, c);

  console.log(p, c);
});
*/
