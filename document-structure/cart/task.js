"use strict";

const controlDec = document.querySelectorAll(".product__quantity-control_dec");
const controlInc = document.querySelectorAll(".product__quantity-control_inc");
const buttonsProductAdd = document.querySelectorAll(".product__add");
const cart = document.getElementsByClassName("cart__products")[0];

function clickDecrease() {
  let quantity = parseInt(
    this.closest("div.product__quantity-controls").querySelector(
      "div.product__quantity-value"
    ).innerText
  );
  if (quantity - 1 >= 1) {
    quantity = quantity - 1;
    this.closest("div.product__quantity-controls").querySelector(
      "div.product__quantity-value"
    ).innerText = quantity;
  }
}

function clickIncrease() {
  let quantity = parseInt(
    this.closest("div.product__quantity-controls").querySelector(
      "div.product__quantity-value"
    ).innerText
  );
  quantity = quantity + 1;
  this.closest("div.product__quantity-controls").querySelector(
    "div.product__quantity-value"
  ).innerText = quantity;
}

function productAdd() {
  if (cart.querySelector("div.cart__product") != null) {
    for (
      let i = 0;
      i < Array.from(cart.querySelectorAll("div.cart__product")).length;
      i++
    ) {
      const element = Array.from(cart.querySelectorAll("div.cart__product"))[i];
      if (element.dataset.id === this.closest("div.product").dataset.id) {
        element.querySelector("div.cart__product-count").innerText =
          parseInt(element.querySelector("div.cart__product-count").innerText) +
          parseInt(
            this.closest("div.product").querySelector(
              "div.product__quantity-value"
            ).innerText
          );
        return false;
      }
      if (
        i + 1 ===
        Array.from(cart.querySelectorAll("div.cart__product")).length
      ) {
        addNewCard(this);
        i = i + 1;
      }
    }
  } else {
    addNewCard(this);
  }
}

function addNewCard(context) {
  let newCard = document.createElement("div");
  newCard.classList.add("cart__product");
  newCard.dataset.id = context.closest("div.product").dataset.id;
  newCard.innerHTML = `<img class="cart__product-image" src="${
    context.closest("div.product").querySelector("img").src
  }"><div class="cart__product-count">
    ${
      context
        .closest("div.product")
        .querySelector("div.product__quantity-value").innerText
    }</div>`;
  cart.appendChild(newCard);
}

for (let i = 0; i < Array.from(controlDec).length; i++) {
  const element = Array.from(controlDec)[i];
  element.addEventListener("click", clickDecrease);
}
for (let i = 0; i < Array.from(controlInc).length; i++) {
  const element = Array.from(controlInc)[i];
  element.addEventListener("click", clickIncrease);
}
for (let i = 0; i < Array.from(buttonsProductAdd).length; i++) {
  const element = Array.from(buttonsProductAdd)[i];
  element.addEventListener("click", productAdd);
}
