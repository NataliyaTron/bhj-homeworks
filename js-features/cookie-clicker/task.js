'use strict'

let cookieImage = document.getElementById('cookie');
let cookieClickCounter = document.getElementById('clicker__counter');
let cookieClickSpeed = document.getElementById('clicker__speed__counter');
let sumClicks = 0;
let firstClick = 0;
let currentInterval = 0;

function clicker() {
  cookieImage.width = cookieImage.width == 200 ? 250 : 200;
  
  cookieImage.height = cookieImage.height == 250 ? 200 : 250;

  cookieClickCounter.textContent = sumClicks++;

  currentInterval = new Date().getTime() - firstClick;

  cookieClickSpeed.textContent = Math.round((1 / (currentInterval / 1000) * 100))/100;
  firstClick = new Date().getTime();
}

cookieImage.onclick = clicker;


