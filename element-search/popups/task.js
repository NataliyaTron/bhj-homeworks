'use strict'

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnDanger = document.getElementsByClassName('btn_danger')[0];
const btnCloseArray = Array.from(document.getElementsByClassName('modal__close_times'));

function showModalMain() {
  modalMain.classList.add('modal_active');
}

function clickButton() {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}

function closeModal() {
  this.closest('div.modal').classList.remove('modal_active');
}

document.addEventListener('DOMContentLoaded', showModalMain);
btnDanger.addEventListener('click', clickButton);
for(let i=0; i < btnCloseArray.length; i++) {
  const element = btnCloseArray[i];
  element.addEventListener('click', closeModal);
}
