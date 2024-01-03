import Helpers from "./helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  const helpers = new Helpers();
  helpers.generatePalette();

  window.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      helpers.generateColorDiv(helpers.lastIndex + 1);
    }
  });

  const addButton = document.querySelector(".add");

  addButton.addEventListener("click", function () {
    helpers.generateColorDiv(helpers.lastIndex + 1);
  });
});
