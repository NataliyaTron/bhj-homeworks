"use strict";

const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = localStorage.getItem("userId");

if (userId) {
  welcome.classList.add("welcome_active");
  welcome.textContent = `Добро пожаловать, пользователь ${userId}!`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        form.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        welcome.textContent = `Добро пожаловать, пользователь ${data.user_id}!`;
        localStorage.setItem("user_id", data.user_id);
        console.log(localStorage.getItem("user_id", data.user_id));
      } else {
        alert("Неверный логин/пароль");
      }
    });
});
