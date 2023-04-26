"use strict";
const interests = Array.from(document.querySelectorAll(".interest"));

for (let interest of interests) {
  interest.addEventListener("change", (e) => {
    let sub = e.target.closest(".interest");
    let subList = Array.from(sub.querySelectorAll(".interest"));

    for (let item of subList) {
      let checkBox = item.querySelector(".interest__check");
      e.target.checked ? (checkBox.checked = true) : (checkBox.checked = false);
    }
  });
}
