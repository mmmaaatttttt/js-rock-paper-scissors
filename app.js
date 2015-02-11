function determineWinner(player1Choice, player2Choice) {
  if(player1Choice === player2Choice) {
    return {winner: null, message: 'Its a draw'};
  }

  var rules = [
    { weapons: ['rock', 'paper'], winner: 'paper', message: 'paper wraps rock' },
    { weapons: ['rock', 'scissors'], winner: 'rock', message: 'rock smashes scissors' },
    { weapons: ['paper', 'scissors'], winner: 'scissors', message: 'scissors cut paper' },
  ]

  var rule = _.find(rules, function(rule) {
    return _.difference(rule.weapons, [player1Choice, player2Choice]).length == 0;
  });

  var winner = player1Choice === rule.winner ? 'player1' : 'player2';

  return {
    winner: winner,
    message: rule.message
  };
}

function playMatch(playerChoice) {
  var weapons = ['rock', 'paper', 'scissors'];

  var computerChoice = _.sample(weapons);
  $('#computerChoice').text(computerChoice);

  var result = determineWinner(playerChoice, computerChoice);

  var messageNode = $('#message');
  var message = result.message;

  if(result.winner == 'player1') {
    message += ', you win!';
  } else if(result.winner == 'player2') {
    message += ', you lose.';
  }

  messageNode.text(message);
}

$(function() {


  $('#rock').on('click', function() {
    playMatch('rock');
  });


  $('#paper').on('click', function() {
    playMatch('paper');
  });


  $('#scissors').on('click', function() {
    playMatch('scissors');
  });
});
