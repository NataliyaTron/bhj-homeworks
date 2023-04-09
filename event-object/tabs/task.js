const tab = Array.from(document.getElementsByClassName('tab'));
let content = Array.from(document.getElementsByClassName('tab__content'));

function clickNav() {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].className === 'tab tab_active') {
      tab[i].className = 'tab';
      content[i].className = 'tab__content';
    }
  }
  this.className = 'tab tab_active';
  content[tab.indexOf(this)].className = 'tab__content tab__content_active';
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', clickNav);
}