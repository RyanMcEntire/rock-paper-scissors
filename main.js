let playerScore = 0;
let computerScore = 0;
let results = 0;
let round = 0;

if (round === 5) {
  
  console.log(results, playerScore, computerScore);
}

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

function playRound(p, c) {
  if (round === 5) {
    pRock.disabled = true;
    pPaper.disabled = true;
    pScissors.disabled = true;

    if (playerScore > computerScore) {
      gameResults.textcontent = `Congrats!, you won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    if (computerScore > playerScore) {
      gameResults.textContent =
        `Sorry, you lost this one... Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    
       
      console.log(round);
  }
  if (p === c) {
    console.log(
      `${p.charAt(0).toUpperCase() + p.slice(1)} matches ${
        c.charAt(0).toUpperCase() + c.slice(1)
      }. Tie!`
    );
    return 0;
  }
  if (p === "rock" && c === "paper") {
    winLoseTie.textContent = "Rock loses to Paper. You lose...";
    //console.log("Rock loses to Paper. You lose...");
    round++;
    return computerScore++;
  }
  if (p === "rock" && c === "scissors") {
    winLoseTie.textContent = "Rock beats Scissors. You win!";
    //console.log("Rock beats Scissors. You win!");
    round++;
    return playerScore++;
  }
  if (p === "paper" && c === "scissors") {
    winLoseTie.textContent = "Paper Loses to Scissors. You lose...";
    //console.log("Paper Loses to Scissors. You lose...");
    round++;
    return computerScore++;
  }
  if (p === "paper" && c === "rock") {
    winLoseTie.textContent = "Paper beats Rock. You win!";
    //console.log("Paper beats Rock. You win!");
    round++;
    return playerScore++;
  }
  if (p === "scissors" && c === "paper") {
    winLoseTie.textContent = "Scissors beats Paper. You win!";
    //console.log("Scissors beats Paper. You win!");
    round++;
    return playerScore++;
  }
  if (p === "scissors" && c === "rock") {
    winLoseTie.textContent = "Scissors loses to Rock. You lose.";
    //console.log("Scissors loses to Rock. You lose.");
    round++;
    return computerScore++;
  }
}

/*
function game() {
  let pScore = 0;
  let cScore = 0;
  let results = 0;
  for (let i = 0; i < 5; i++) {
    const c = computerPlay();
    let p = prompt("Choose your weapon: rock, paper, scissors");
    p = p.toLowerCase();
    const round = playRound(p, c);
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

game();
*/

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
/*
const pSelection = document.querySelectorAll("button");

for (const pPicked of pSelection) {
  pPicked.addEventlistener("click", (e) => {
    const c = computerPlay();
    let p = e.target.class.value;
    const round = playRound(p, c);
    console.log(p);
  });
};
*/

/*
function game() {
  let pScore = 0;
  let cScore = 0;
  let results = 0;
  for (let i = 0; i < 5; i++) {
    const pSelection = document.querySelectorAll("button");
    for (const pChoice of pSelection);
    {
      pChoice.addEventListener("click", () => {
        return pChoice.value;
      });
      let p = pChoice.value;
      const c = computerPlay();
      playRound(p, c);
      console.log(p, c);
    }
  }
}

game();

*/

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
