var weapons = ['rock', 'paper', 'scissors'], 
    resultText = ["We have a tie!", "You win! Congratulations!", "The computer beat you :( Try again!"],
    explanation, result;

function computerSelection() {
  return _.shuffle(weapons)[0];
}

function playRound(e) {
  var choice = e.target.id;
  if (weapons.indexOf(choice) > -1) {
    var computerChoice = computerSelection();
    declareWinner(choice,computerChoice);
  } 
}

function declareWinner(player1, player2) {
  explanation.innerText = setExplanation(player1, player2);
  var idx = ((weapons.indexOf(player1) - weapons.indexOf(player2)) % 3 + 3) %3;
  result.innerText = resultText[idx];
}

function setExplanation(player1, player2) {
  return "You chose " + player1 + ". // The computer chose " + player2 + ".";
}



window.onload = function() {
  explanation = document.getElementById('explanation');
  result = document.getElementById('result');
  document.querySelector('.row').addEventListener('click', playRound);
};

// function determineWinner(player1Choice, player2Choice) {
//   if(player1Choice === player2Choice) {
//     return {winner: null, message: 'Its a draw'};
//   }

//   var rules = [
//     { weapons: ['rock', 'paper'], winner: 'paper', message: 'paper wraps rock' },
//     { weapons: ['rock', 'scissors'], winner: 'rock', message: 'rock smashes scissors' },
//     { weapons: ['paper', 'scissors'], winner: 'scissors', message: 'scissors cut paper' },
//     { weapons: ['rock', 'lizard'], winner: 'rock', message: 'rock smashes lizard' },
//     { weapons: ['rock', 'spock'], winner: 'spock', message: 'spock vaporizes rock' },
//     { weapons: ['lizard', 'paper'], winner: 'lizard', message: 'lizard eats paper' },
//     { weapons: ['lizard', 'scissors'], winner: 'scissors', message: 'scissors decapitate lizard' },
//     { weapons: ['spock', 'scissors'], winner: 'spock', message: 'spock smashes scissors' },
//     { weapons: ['spock', 'paper'], winner: 'paper', message: 'paper disproves spock' },
//     { weapons: ['spock', 'lizard'], winner: 'lizard', message: 'lizard poisons spock' },
//   ]

//   var rule = _.find(rules, function(rule) {
//     return _.difference(rule.weapons, [player1Choice, player2Choice]).length == 0;
//   });

//   if(rule === undefined) {
//     console.log({player1: player1Choice, player2: player2Choice})
//     throw {player1: player1Choice, player2: player2Choice}
//   }

//   var winner = player1Choice === rule.winner ? 'player1' : 'player2';

//   return {
//     winner: winner,
//     message: rule.message
//   };
// }

// function playMatch(playerChoice) {
//   var weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

//   var computerChoice = _.sample(weapons);
//   $('#computerChoice').text(computerChoice);

//   var result = determineWinner(playerChoice, computerChoice);

//   var messageNode = $('#message');
//   var message = result.message;

//   if(result.winner == 'player1') {
//     message += ', you win!';
//   } else if(result.winner == 'player2') {
//     message += ', you lose.';
//   }

//   messageNode.text(message);
// }

// $(function() {
//   $('#rock').on('click', function() {
//     playMatch('rock');
//   });


//   $('#paper').on('click', function() {
//     playMatch('paper');
//   });


//   $('#scissors').on('click', function() {
//     playMatch('scissors');
//   });

//   $('#lizard').on('click', function() {
//     playMatch('lizard');
//   });

//   $('#spock').on('click', function() {
//     playMatch('spock');
//   });
// });
