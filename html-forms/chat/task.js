"use strict";
const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.querySelector(".chat-widget__input");
let downtime;

chatWidget.addEventListener("click", () => {
  if (!chatWidget.classList.contains("chat-widget_active")) {
    chatWidget.classList.add("chat-widget_active");
    downtime = setTimeout(() => {
      sendMessage(randomMessage(), "");
    }, 30000);
  }
});

chatWidgetInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (chatWidgetInput.value) {
      clearTimeout(downtime);
      sendMessage(chatWidgetInput.value, "message_client");
      sendMessage(robotMessage(), "");
      scrollChat();
      chatWidgetInput.value = "";
    }
  }
});

function robotMessage() {
  let robotMessagesArray = [
    "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
    "Кто тут?",
    "Где ваша совесть?",
    "К сожалению все операторы сейчас заняты. Не пишите нам больше",
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать!",
  ];

  let randomIndex = Math.floor(Math.random() * robotMessagesArray.length);
  return robotMessagesArray[randomIndex];
}

function sendMessage(textMessage, isClientClass) {
  let messages = document.querySelector(".chat-widget__messages");
  let timeMessage = new Date().getHours() + ":" + new Date().getMinutes();
  messages.innerHTML += `
  <div class="message ${isClientClass}">
    <div class="message__time">${timeMessage}</div>
    <div class="message__text">
      ${textMessage}
    </div>
  </div>
`;
}

function scrollChat() {
  let messagesContainer = document.querySelector(
    ".chat-widget__messages-container"
  );
  let messages = document.querySelector(".chat-widget__messages");
  messagesContainer.scrollTop = messages.getBoundingClientRect().height;
}
