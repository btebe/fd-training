// variables
const hand = ["rock", "paper", "scissors"];
let totalPlayerScore = 0;
let totalComputerScore = 0;
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;
let playerSelection = "";
let computerSelection = "";
const topScore = 4;

// container elements
var handSelectCon = document.getElementById("handSelection");
var compareCon = document.getElementById("compare");
var resultCon = document.getElementById("result");

// related players elements
var player = document.getElementById("player");
var computer = document.getElementById("computer");
var score = document.getElementById("playerScore");
let resultText = document.querySelector(".result h1");
var endText = document.getElementById("endText");

// button elements
var replayBtn = document.getElementById("replay");
var rulesBtn = document.getElementById("rulesBtn");
var dialogClose = document.getElementById("close");
var dialogEndClose = document.getElementById("endClose");

// other elements
var overlay = document.getElementById("overlay");

// click events

//open rule dialog
rulesBtn.addEventListener("click", () => {
  overlay.style.display = "inherit";
  document.getElementById("rules").open = true;
});

// close rule dialog
dialogClose.addEventListener("click", () => {
  document.getElementById("rules").open = false;
  overlay.style.display = "none";
});

// close end result dialog
dialogEndClose.addEventListener("click", () => {
  document.getElementById("endResult").open = false;
  overlay.style.display = "none";
});

// player choices of hand
const handList = document.querySelectorAll(".hand");
handList.forEach((hand) => {
  hand.addEventListener("click", () => {
    playerSelection = hand.value;
    nextStage();
  });
});

// replay game from begining
replayBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  tieCounter = 0;

  compareCon.classList.remove("ending");
  player.classList.remove(playerSelection, "isWinner");
  computer.classList.remove(computerSelection, "isWinner");
  resultCon.style.display = "none";
  compareCon.style.display = "none";
  handSelectCon.style.display = "inherit";

  // resets total scores
  if (totalPlayerScore > topScore || totalComputerScore > topScore) {
    totalPlayerScore = 0;
    totalComputerScore = 0;
    score.textContent = 0;
  }
});

// functions

function computerPlay() {
  return hand[Math.floor(Math.random() * hand.length)];
}

//computer's hand
function nextStage() {
  handSelectCon.style.display = "none";
  compareCon.style.display = "inherit";
  player.classList.toggle(playerSelection);
  // to show some delay
  setTimeout(function () {
    computerSelection = computerPlay();
    computer.classList.toggle(computerSelection);
    gameLogic(playerSelection, computerSelection);
  }, 500);
}

function resultStage(winner, result) {
  resultCon.style.display = "inherit";
  compareCon.classList.toggle("ending");
  winner != null ? winner.classList.toggle("isWinner") : "";
  resultText.textContent = result;

  // display total scores of the winner
  if (totalPlayerScore > topScore) {
    document.getElementById("endResult").open = true;
    overlay.style.display = "inherit";
    endText.textContent = "Congrats, you won the game!";
  }
  if (totalComputerScore > topScore) {
    document.getElementById("endResult").open = true;
    overlay.style.display = "inherit";
    endText.textContent = "You lost the game! Try again";
  }
}

function gameLogic(playerHand, computerHand) {
  if (playerHand == computerHand) {
    ++tieCounter;
    resultStage(null, "its a tie");
  } else if (
    (playerHand === hand[0] && computerHand === hand[2]) ||
    (playerHand === hand[1] && computerHand === hand[0]) ||
    (playerHand === hand[2] && computerHand === hand[1])
  ) {
    ++playerScore;
    score.textContent = ++totalPlayerScore;
    totalComputerScore > 0 ? --totalComputerScore : 0;
    resultStage(player, "you win");
  } else {
    ++computerScore;
    score.textContent =
      totalPlayerScore > 0 ? --totalPlayerScore : (0, (totalPlayerScore = 0));
    ++totalComputerScore;
    resultStage(computer, "you lose");
  }
}
