"use strict";
const editor = document.getElementById("editor");

function inputText() {
  localStorage.text = editor.value;
}

function returnText() {
  editor.value = localStorage.getItem("text");
}

editor.addEventListener("input", inputText);
document.addEventListener("DOMContentLoaded", returnText);
