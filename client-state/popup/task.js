"use strict";

const modalMain = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

function closeModal() {
  modalMain.classList.remove("modal_active");
  document.cookie =
    "modal_closed=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
}

if (document.cookie.indexOf("modal_closed") === -1) {
  modalMain.classList.add("modal_active");
  modalClose.addEventListener("click", closeModal);
}
