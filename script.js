'use strict';
/*
console.log(document.querySelector('.message').textContent); // querySelector is used to select particular class or Id

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 2; 
console.log(document.querySelector('.guess').value)*/

let secretNumber = Math.trunc(Math.random()*20)+1; 
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    //No INPUT
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!'
    }
    //WHEN INPUT IS CORRECT  
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    //WHEN INPUT TOO HIGH
    else if(guess > secretNumber){

        if(score > 1){document.querySelector('.message').textContent = '📈 Too high!'
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = '💔 You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
    }
    //WHEN INPUT TOO LOW   
    else if(guess < secretNumber){
        if(score > 1){document.querySelector('.message').textContent = '📉 Too low!'
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = '💔 You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
    }
})

//PRESSING AGAIN BTN!!!
document.querySelector('.again').addEventListener('click', ()=> {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})
