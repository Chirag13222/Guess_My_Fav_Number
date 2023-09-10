'use strict';
// 'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳🥳🥳Correct Answer';

document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);   // else if (guess > secretNumber) {
  //   // When Guess is to High
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈📈 To High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost The Game';
  //   }
  // } else if (guess < secretNumber) {
  //   // when Guess is to low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉📉  To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🔥🧨Lost The Game';
  //   }
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

let DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //When Guess is not entered
  if (!guess) {
    DisplayMessage('🤖🤖 No Number!');
  } else if (guess === secretNumber) {
    DisplayMessage('🥳🥳 Correct Answer');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈📈 To High': '📉📉  To Low';
      DisplayMessage(guess > secretNumber ? '📈📈 To High' : '📉📉  To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      DisplayMessage('You Lost The Game');
    }
  }
});

//===========Reset Button===========

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  DisplayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
