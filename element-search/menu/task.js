const menuLinkList = Array.from(document.getElementsByClassName('menu__link'));

for (let i=0; i < menuLinkList.length; i++) {
  if(menuLinkList[i].closest('li').querySelector('ul')){
    let link = menuLinkList[i].closest('li').querySelector('a');
    console.log(link);
    link.addEventListener('click', showSubMenu);
  }
}

function showSubMenu(event) {
  event.preventDefault();
  this.closest('li').querySelector('ul').classList.toggle('menu_active');
}
