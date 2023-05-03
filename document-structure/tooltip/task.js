"use strict";

const links = Array.from(document.getElementsByClassName(".has-tooltip"));

function makeTooltipActive(event) {
  event.preventDefault();
  let deletableElement = document.querySelector(".tooltip tooltip_active")[0];
  if (deletableElement) {
    deletableElement.remove();
  }
  let tooltipText = this.title;
  this.insertAdjacentHTML(
    "afterend",
    '<div class="tooltip tooltip_active">`${tooltipText}`</div>'
  );
}

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("click", makeTooltipActive);
}
