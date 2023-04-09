'use strict'
const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownValueArray = Array.from(dropdownValue);
const dropdownItemsArray = Array.from(document.getElementsByClassName('dropdown__link'));

function changeActiveDropdown() {
  let dropdownListArray = Array.from(document.getElementsByClassName('dropdown__list'));
  if (dropdownListArray[0].className === 'dropdown__list') {
    dropdownListArray[0].className = 'dropdown__list dropdown__list_active';
  } else {
    dropdownListArray[0].className = 'dropdown__list';
  }
  return false;
}

function clickItem(event) {
  let currentValue = Array.from(document.getElementsByClassName('dropdown__value'));
  currentValue[0].textContent = this.textContent;
  event.preventDefault();
  changeActiveDropdown();
}

dropdownValueArray[0].addEventListener('click', changeActiveDropdown);

for (let i = 0; i < dropdownItemsArray.length; i++) {
  dropdownItemsArray[i].addEventListener('click', clickItem);
}