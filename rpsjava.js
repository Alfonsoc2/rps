function getComputerChoice() {
  const CompChoice = Math.random();

  if (CompChoice < 0.33) {
      return "rock";
  } else if (CompChoice < 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}

function getHumanChoice() {
  let choice;

  do {
      choice = prompt("rock, paper, or scissors?").toLowerCase();

      if (choice === "rock" || choice === "paper" || choice === "scissors") {
          return choice;
      } else {
          alert("INVALID INPUT TRY AGAIN");
      }
  } while (true);
}

function determineWinner(choice, CompChoice) {
  if (choice === CompChoice) {
      return "Draw!";
  } else if (
      (choice === "rock" && CompChoice === "scissors") ||
      (choice === "scissors" && CompChoice === "paper") ||
      (choice === "paper" && CompChoice === "rock")
  ) {
      return "You win!";
  } else {
      return "Computer wins!";
  }
}