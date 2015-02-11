$(function() {
  var weapons = ['rock', 'paper', 'scissors'];

  $('#rock').on('click', function() {
    var computerChoice = _.sample(weapons);
    $('#computerChoice').text(computerChoice);

    var message = $('#message');
    if(computerChoice === 'rock') {
      message.text('Its a draw');
    } else if(computerChoice === 'scissors') {
      message.text('Rock smashes scissors, you win!');
    } else {
      message.text('Paper wraps rock, you lose');
    }
  });


  $('#paper').on('click', function() {
    var computerChoice = _.sample(weapons);
    $('#computerChoice').text(computerChoice);

    var message = $('#message');
    if(computerChoice === 'rock') {
      message.text('Paper wraps rock, you win!');
    } else if(computerChoice === 'scissors') {
      message.text('Scissors cut paper, you lose');
    } else {
      message.text('Its a draw');
    }
  });


  $('#scissors').on('click', function() {
    var computerChoice = _.sample(weapons);
    $('#computerChoice').text(computerChoice);

    var message = $('#message');
    if(computerChoice === 'rock') {
      message.text('Rock smashes scissors, you lose');
    } else if(computerChoice === 'scissors') {
      message.text('Its a draw');
    } else {
      message.text('Scissors cut paper, you win!');
    }
  });


});
