let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let userChoice = "";

  while (userChoice === "") {
    userChoice = prompt("Rock, Paper or Scissors?", "")?.toLowerCase();

    switch (userChoice) {
      case "rock":
        return userChoice;
        break;

      case "paper":
        return userChoice;
        break;

      case "scissors":
        return userChoice;
        break;

      default:
        userChoice = "";
        break;
    }
  }

  return userChoice;
}

function playRound(computerChoice, humanChoice) {
  console.log(`${humanChoice} vs ${computerChoice}`);

  if (computerChoice === "rock") {
    if (humanChoice === "rock") {
      console.log("It's a tie!");
    } else if (humanChoice === "paper") {
      humanScore++;
      console.log(`You win! Paper beats Rock`);
    } else {
      computerScore++;
      console.log(`You lose! Rock beats Scissors`);
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "paper") {
      console.log("It's a tie!");
    } else if (humanChoice === "scissors") {
      humanScore++;
      console.log(`You win! Scissors beats Paper`);
    } else {
      computerScore++;
      console.log(`You lose! Paper beats Rock`);
    }
  } else {
    if (humanChoice === "scissors") {
      console.log("It's a tie!");
    } else if (humanChoice === "rock") {
      humanScore++;
      console.log(`You win! Rock beats Scissors`);
    } else {
      computerScore++;
      console.log(`You lose! Scissors beats Paper`);
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}, fight!`);
    const humanSelection = getHumanChoice()?.toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(computerSelection, humanSelection);
    console.log(
      `Your score: ${humanScore}, Computer's score: ${computerScore}`
    );
  }

  if (computerScore > humanScore) {
    console.log("Computer won the game! (ಥ﹏ಥ)");
  } else if (humanScore > computerScore) {
    console.log("You won the game! ٩(◕‿◕)۶");
  } else {
    console.log("It's a tie! ¯|_(⊙_ʖ⊙)_/¯");
  }
}

playGame();
