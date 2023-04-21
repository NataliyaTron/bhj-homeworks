"use strict";

window.addEventListener("scroll", function () {
  let revealElements = this.document.querySelectorAll(".reveal");

  for (let value of revealElements) {
    if (value.getBoundingClientRect().top < this.window.innerHeight) {
      value.classList.add("reveal_active");
    }
    if (
      value.getBoundingClientRect().bottom < 0 ||
      value.getBoundingClientRect().top > this.window.innerHeight
    ) {
      value.classList.remove("reveal_active");
    }
  }
});
