import Helpers from "./helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  const helpers = new Helpers();
  helpers.generatePallete();

  const colors = document.querySelectorAll(".palette div");

  colors.forEach(function (color, index) {
    let i = index + 1;
    let button = document.createElement("button");
    let copy = document.createElement("button");
    let currentColor = helpers.changeColor(i);
    
    button.classList.add("color-button");
    copy.classList.add("copy-button");

    button.innerText = currentColor;
    copy.innerText = "Copiar";

    button.addEventListener("click", function () {
      currentColor = helpers.changeColor(i);
      button.innerText = currentColor;
      copy.innerText = "Copiar";
    });

    copy.addEventListener("click", function () {
      let copyText = currentColor;
      helpers.copiarParaClipboard(copyText);
      copy.innerText = "Copiado!";
    });

    color.appendChild(button);
    color.appendChild(copy);
  });
});
