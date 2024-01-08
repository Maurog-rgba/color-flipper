import Helpers from "./helper/helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  const helpers = new Helpers();
  helpers.generatePalette();

  window.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      helpers.randomAllColors();
    }
  });

  function handleButtonElements(buttonClass, callback) {
    const element = document.querySelector(buttonClass);
    element.addEventListener("click", function () {
      callback();
    });
  }

  handleButtonElements(".home", function () {
    window.location.href = "../home/home.html";
  });
  
  handleButtonElements(".save", function () {
    alert("Must be logged in to save palette.");
  });

  handleButtonElements(".add", function () {
    helpers.generateColorDiv(helpers.lastIndex + 1);
  });

  handleButtonElements(".random", function () {
    helpers.randomAllColors();
  });

  handleButtonElements(".logout", function () {
    sessionStorage.removeItem("token");
    window.location.href = "../auth/login/login.html";
  });
});
