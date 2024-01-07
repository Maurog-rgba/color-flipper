import Helpers from "./helper/helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  const helpers = new Helpers();
  helpers.generatePalette();

  window.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      helpers.randomAllColors();
    }
  });

  const addButton = document.querySelector(".add");

  addButton.addEventListener("click", function () {
    helpers.generateColorDiv(helpers.lastIndex + 1);
  });

  const homeButton = document.querySelector(".home");

  homeButton.addEventListener("click", function () {
    window.location.href = "../home/home.html";
  });


  const randomButton = document.querySelector(".random");

  randomButton.addEventListener("click", function () {
    helpers.randomAllColors();
  });

  const logoutButton = document.querySelector(".logout");

  logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("token");
    window.location.href = "../auth/login/login.html";
  });
});
