var weapons = ['rock', 'paper', 'scissors'], 
    resultText = ["We have a tie!", "You win! Congratulations!", "The computer beat you :( Try again!"],
    wins = 0,
    losses = 0,
    explanation, result, winCount, loseCount;

function computerSelection() {
  return _.shuffle(weapons)[0];
}

function playRound(e) {
  var choice = e.target.id;
  if (weapons.indexOf(choice) > -1) {
    var computerChoice = computerSelection();
    declareWinner(choice,computerChoice);
  } else if (choice === "reset") {
    reset();
  }
}

function declareWinner(player1, player2) {
  explanation.innerText = setExplanation(player1, player2);
  var idx = ((weapons.indexOf(player1) - weapons.indexOf(player2)) % 3 + 3) %3;
  result.innerText = resultText[idx];
  updateCount(idx);
}

function updateCount(num) {
  if (num===1) {
    wins++;
    winCount.innerText = wins;
  } else if (num===2) {
    losses++;
    loseCount.innerText = losses;
  }
}

function setExplanation(player1, player2) {
  return "You chose " + player1 + ". // The computer chose " + player2 + ".";
}

function reset() {
  explanation.innerText = "";
  result.innerText = "";
  wins = 0;
  losses = 0;
  winCount.innerText = '0';
  loseCount.innerText = '0';
}

window.onload = function() {
  explanation = document.getElementById('explanation');
  result = document.getElementById('result');
  winCount = document.getElementById('winCount');
  loseCount = document.getElementById('loseCount');
  document.querySelector('.row').addEventListener('click', playRound);
};