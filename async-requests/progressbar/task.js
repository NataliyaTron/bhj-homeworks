"use strict";

const submitFile = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = new FormData(submitFile);
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      const progressBar = document.getElementById("progress");
      const progress = (event.loaded / event.total) * 100;
      progressBar.value = progress / 100;
    }
  };

  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload",
    true
  );
  xhr.send(form);
});
