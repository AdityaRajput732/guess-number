'use strict';

// document.querySelector('.message').textContent = 'Congrats';
// document.querySelector('.message').textContent = 'You lost the game';
// document.querySelector('.score').textContent = '15';
//  document.querySelector('.number').textContent = '18';
// console.log(Math.trunc(Math.random() * 20) + 1);

// document.querySelector('.check').addEventListener('click', function() {
// console.log(document.querySelector('.guess').value);

// })
let display = function(message) {
    document.querySelector('.message').textContent = message;
}
 //document.querySelector('.score').textContent = '15';
let highscore = 0;
let score = 20;
let secretNumber =  Math.trunc(Math.random() * 20) + 1;

// 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        display('Please enter a number !');
    } else if (guess ==secretNumber) {
         display('Congratulation you won 25 lakh 👯🎉🎊🪅👯')
          document.querySelector('body').style.backgroundColor = "green";
         
          document.querySelector('.number').textContent = secretNumber;
          document.querySelector('.number').style.width = "30rem";
          if(score>highscore){
            document.querySelector('.highscore').textContent = score;
          } 
         
          
    } else if (guess !== secretNumber) {
       
       
         if(score>1){
            display(guess>secretNumber ?  'Expectation High': 'Expectation Low');
            score--;
            document.querySelector('.score').textContent = score;
         } else {
            display('U lost the game');
            document.querySelector('.score').textContent = "0";
         }

    }
    })
    document.querySelector('.again').addEventListener('click', function() {
       display('Start guessing...');
       document.querySelector('.score').textContent = '20';
     document.querySelector('.number').textContent = '?';
     document.querySelector('body').style.backgroundColor = "#222";
     let guess = document.querySelector('.guess').value = '';
     document.querySelector('.number').style.width = "15rem";
     secretNumber =  Math.trunc(Math.random() * 20) + 1;
    })