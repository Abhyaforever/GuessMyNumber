'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// console.log(secretNumber);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = num => {
  document.querySelector('.number').textContent = num;
};

const numberWidth = width => {
  document.querySelector('.number').style.width = width;
};

const bodyColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const currentScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ NO NUMBER!!!');
    // wins the game... :)
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    bodyColor('#60b347');
    numberWidth('30rem');
    displaySecretNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // not equal to secret number :(
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber ? '📉 Number is Too Low' : '📈 Number is Too High'
      );
      score--;

      currentScore(score);
      bodyColor('#222');

      numberWidth('15rem');
    } else {
      displayMessage('💥 You lost the game!');
      currentScore(0);

      bodyColor('#222');

      numberWidth('15rem');
    }
  }
});

// Coding Challenge #1

document.querySelector('.again').addEventListener('click', function () {
  console.log('I clicked on again...');

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  currentScore(score);

  numberWidth('15rem');
  displaySecretNumber('?');

  document.querySelector('.guess').value = '';
  bodyColor('#222');

  displayMessage('Start Guessing...');
});
