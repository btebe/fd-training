const hand = ["rock", "paper", "scissors"];

/**
 * generates a random hand selection
 * @return {string} a hand selection
 */
let computerPlay = () => {
<<<<<<< HEAD
  return hand[Math.floor(Math.random() * hand.length)];
=======
  let hands = ["Rock", "Paper", "Scissors"];
  return hands[Math.floor(Math.random() * hands.length)];
};

/**
 *  needs the help of the checkHand function to check if player input is within the keywords.
 * corrects player's keyword case to lowercase
 * @param {string} playerSelection player's input
 * @return {string} the standard case of one of the keywords inputed. or else it returns a null.
 */
let proofHand = (playerSelection) => {
  // 1 if sorted after, [if capitalized]
  // 0 if equal
  let ls = ["rock", "paper", "scissors"];
  for (let i = 0; i <= ls.length; i++) {
    if (playerSelection.localeCompare(ls[i]) === 1) {
      return checkHand(playerSelection.toLowerCase());
    } else if (playerSelection.localeCompare(ls[i]) === 0) {
      return checkHand(playerSelection);
    }
  }
  return null;
};

/**
 * helps proofHand function if player's input matches the correct keywords for the game.
 * @param {string} hand player's input
 * @return {string} the standard case of one of the keywords inputed. or else it returns a null.
 */
let checkHand = (hand) => {
  let playerHand;
  switch (hand) {
    case "rock":
      playerHand = "Rock";
      break;
    case "paper":
      playerHand = "Paper";
      break;
    case "scissors":
      playerHand = "Scissors";
      break;
    default:
      return null;
  }
  return playerHand;
>>>>>>> 864c1a2918fae0c7f5c9b71eb8ecd6515d6947d4
};

/**
 * the logic behind rock,paper and scissors, helps function playRound
 * @param {string} playerHand player's input
 * @param {string} computerHand computer's input
 * @return {object} an object with the scores of the players for one round. or else it returns a null.
 */
let gameLogic = (playerHand, computerHand) => {
  let result = {
    playerScore: 0,
    computerScore: 0,
    tieScore: 0,
    challenge: `player: ${playerHand}, computer: ${computerHand}`,
    winnerText: "",
    loserText: "",
  };

  if (playerHand === computerHand) {
    result.tieScore = 1;
  } else if (
    (playerHand === hand[0] && computerHand === hand[2]) ||
    (playerHand === hand[1] && computerHand === hand[0]) ||
    (playerHand === hand[2] && computerHand === hand[1])
  ) {
    result.playerScore = 1;
    result.winnerText = "You win!";
  } else {
    result.computerScore = 1;
    result.loserText = `You Lose! ${computerHand} beats ${playerHand}!`;
  }

  return result;
};

/**
 * one round of rock paper and scissors with help of gameLogic function.
 * @param {string} playerSelection player's input
 * @param {string} computerSelection computer's input
 * @return {object} players score object or else null
 */
let playRound = (playerSelection, computerSelection) => {
  if (typeof playerSelection !== "string") {
    return null;
  } else {
    let keyword = playerSelection.toLowerCase();
    if (!hand.includes(keyword)) return null;
    return gameLogic(keyword, computerSelection);
  }
};

/**
 * a five round of rock, paper and scissors game
 * @return {string} the winner of the game.
 */
let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let tieCounter = 0;

  for (let i = 0; i < 5; i++) {
    const promptext1 = "Let's play 5 rounds of rock, paper and scissors!";
    const promptext2 = `Round ${i + 1}: Please enter your choice of hand`;
    let playerSelection;
    if (i == 0) {
      playerSelection = prompt(promptext1 + "\n" + promptext2);
    } else {
      playerSelection = prompt(promptext2);
    }

    if (playerSelection == null) return "game exited!";

    let outcome = playRound(playerSelection, computerPlay());

    while (outcome == null) {
      const warningText =
        "You either didnt enter a string or you misspelled rock, paper and scissors.";
      playerSelection = prompt(warningText + "\n" + promptext2);
      if (playerSelection == null) return "game exited!";
      outcome = playRound(playerSelection, computerPlay());
    }

    console.log(`round ${i + 1}: ${outcome.challenge}`);
    if (outcome.playerScore === outcome.computerScore) {
      tieCounter++;
      const style = "color:yellow;font-weight: bold;";
      console.log("%cIts a tie!", style);
    } else if (outcome.playerScore > outcome.computerScore) {
      playerScore++;
      const style = "color:greenyellow; font-weight: bold;";
      console.log(`%c${outcome.winnerText}`, style);
    } else {
      computerScore++;
      const style = "color:aqua; font-weight: bold;";
      console.log(`%c${outcome.loserText}`, style);
    }
  }
  return scoreBoard(playerScore, computerScore, tieCounter);
};

let scoreBoard = (playerScore, computerScore, tieCounter) => {
  const boardStyle = "color:orange; font-weight: bold;";
  let scores = `player: ${playerScore}, computer: ${computerScore}, tie: ${tieCounter}`;
  console.log("%cScore Board:" + "\n" + scores, boardStyle);
  if (playerScore === computerScore) {
    return "There is no winner. Its a tie!";
  } else if (playerScore > computerScore) {
    return "Yes! you won against a computer!!";
  } else {
    return "Oh no, you lost to a computer...;(";
  }
};
