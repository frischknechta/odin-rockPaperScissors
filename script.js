let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerChoice, humanChoice) {
  let output = "";

  if (computerChoice === "rock") {
    if (humanChoice === "rock") {
      output = "It's a tie!";
    } else if (humanChoice === "paper") {
      humanScore++;
      output = `You win! Paper beats Rock`;
    } else {
      computerScore++;
      output = `You lose! Rock beats Scissors`;
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "paper") {
      output = "It's a tie!";
    } else if (humanChoice === "scissors") {
      humanScore++;
      output = `You win! Scissors beats Paper`;
    } else {
      computerScore++;
      output = `You lose! Paper beats Rock`;
    }
  } else {
    if (humanChoice === "scissors") {
      output = "It's a tie!";
    } else if (humanChoice === "rock") {
      humanScore++;
      output = `You win! Rock beats Scissors`;
    } else {
      computerScore++;
      output = `You lose! Scissors beats Paper`;
    }
  }

  results.textContent = output;
  hScore.textContent = humanScore;
  cScore.textContent = computerScore;
}

const buttons = document.querySelectorAll("button");
const rounds = document.querySelector(".rounds");
const results = document.querySelector(".result");
const winner = document.querySelector(".winner");
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(getComputerChoice(), event.target.value);
    ++round;
    rounds.textContent = `Round ${round}`;

    if (round === 5) {
      buttons.forEach((button) => {
        button.disabled = true;
      });

      if (computerScore > humanScore) {
        winner.textContent = "Computer won the game! (ಥ﹏ಥ)";
      } else if (humanScore > computerScore) {
        winner.textContent = "You won the game! ٩(◕‿◕)۶";
      } else {
        winner.textContent = "It's a tie! ¯|_(⊙_ʖ⊙)_/¯";
      }

      const restart = document.createElement("button");
      restart.classList.add("restart");
      restart.textContent = "Play again?";
      winner.parentNode.appendChild(restart);

      restart.addEventListener("click", () => {
        round = 0;
        humanScore = 0;
        computerScore = 0;
        rounds.textContent = `Round 1`;
        results.textContent = "";
        winner.textContent = "";
        hScore.textContent = "";
        cScore.textContent = "";
        buttons.forEach((button) => {
          button.disabled = false;
        });

        winner.parentNode.removeChild(restart);
      });
    }
  });
});
