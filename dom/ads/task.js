"use strict";

let interval = 1000;
let ads = document.querySelectorAll(".rotator");

for (let value of ads) {
  let rotatorCase = value.querySelectorAll(".rotator__case");

  setTimeout(function rotate() {
    for (let i = 0; i < rotatorCase.length; i++) {
      if (rotatorCase[i].classList.contains("rotator__case_active")) {
        rotatorCase[i].classList.remove("rotator__case_active");
        i = i + 1 >= rotatorCase.length ? 0 : i + 1;

        rotatorCase[i].classList.add("rotator__case_active");
        interval = rotatorCase[i].dataset.speed;
        rotatorCase[i].style.color = rotatorCase[i].dataset.color;
      }
    }
    setTimeout(rotate, interval);
  }, interval);
}
