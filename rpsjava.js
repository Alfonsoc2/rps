let playerScore = 0;
let computerScore = 0;

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

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Update UI with results
function updateUI(resultMessage, playerChoice, computerChoice) {
  document.getElementById("result-message").innerText = resultMessage;
  document.getElementById("player-score").innerText = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerText = `Computer: ${computerScore}`;
}

// Add event listeners to buttons
document.querySelectorAll(".RPSbutton").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(playerChoice, computerChoice);
    updateUI(resultMessage, playerChoice, computerChoice);
  });
});

// Reset game
document.querySelector(".resetB").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateUI("Game reset! Make a choice to start again.", "", "");
});
