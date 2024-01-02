class Helpers {
  hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  generatePalette() {
    for (let i = 1; i < 5; i++) {
      this.generateColorDiv(i);
    }
  }

  generateColorDiv(i) {
    const palette = document.querySelector(".palette");

    let color = document.createElement("div");
    color.classList.add("color");
    color.id = `color-${i}`;

    console.log("color.id", color.id);
    let button = document.createElement("button");
    button.classList.add("add-button");
    button.innerText = "+";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "x";

    button.addEventListener("click", () => {
      let colors = document.querySelectorAll(".color");
      this.generateColorDiv(colors.length + 1);
      this.changeColor(colors.length + 1);
    });

    deleteButton.addEventListener("click", () => {
      color.remove();
    });

    color.appendChild(deleteButton);
    color.appendChild(button);
    palette.appendChild(color);

    this.generateHexCopyButtons(color, i);
  }

  generateHexCopyButtons(color, i) {
    let colorButton = document.createElement("button");
    let copyButton = document.createElement("button");
    let currentColor = this.changeColor(i);

    colorButton.classList.add("color-button");
    copyButton.classList.add("copy-button");

    colorButton.innerText = currentColor;
    copyButton.innerText = "Copiar";

    colorButton.addEventListener("click", function () {
      currentColor = this.changeColor(i);
      button.innerText = currentColor;
      copyButton.innerText = "Copiar";
    });

    copyButton.addEventListener("click", function () {
      let copyText = currentColor;
      this.copiarParaClipboard(copyText);
      copyButton.innerText = "Copiado!";
    });

    color.appendChild(colorButton);
    color.appendChild(copyButton);
  }

  changeColor(index) {
    let colorDiv = document.getElementById(`color-${index}`);
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      randomColor += this.hexValues[Math.floor(Math.random() * this.hexValues.length)];
    }
    colorDiv.style.backgroundColor = randomColor;

    return randomColor;
  }

  copiarParaClipboard(valor) {
    navigator.clipboard
      .writeText(valor)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  }
}

export default Helpers;
