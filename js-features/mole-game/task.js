let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;

function checkHole(hole) {
  if(hole.className.includes('hole_has-mole')){
    counterDead++; 
  } else {
    counterLost++;
  }

  if(counterDead == 10) {
    alert('Победа!');
    counterDead = 0;
    counterLost = 0;
  }

  if(counterLost == 5) {
    alert('Вы проиграли!');
    counterDead = 0;
    counterLost = 0;
  }

  dead.textContent = counterDead;
  lost.textContent = counterLost;
}

for(let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = () => {checkHole(hole)};
}

