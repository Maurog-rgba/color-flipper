import Helpers from "./helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  const helpers = new Helpers();
  helpers.generatePalette();

  window.addEventListener("keydown", function (event) {
    const colors = document.querySelectorAll(".color");
    if (event.key === " ") {
      helpers.generateColorDiv(colors.length + 1);
    }
  });
});
