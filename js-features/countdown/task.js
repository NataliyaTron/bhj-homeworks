'use strict'

let startTimer = 40;
let timer = document.getElementById('timer');
let counter = setInterval(countDownTimer, 1000);

function countDownTimer() {
  timer.textContent = startTimer;
  startTimer--;
  if(startTimer < 0){
    clearInterval(counter);
    alert('Вы победили в конкурсе!');
  }
}