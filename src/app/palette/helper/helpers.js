export default class Helpers {
  hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  colors = [];
  lastIndex = 0;
  divStart = 5;

  generatePalette() {
    for (let i = 0; i < this.divStart; i++) {
      this.generateColorDiv(i);
    }
  }

  randomAllColors() {
    const colors = document.querySelectorAll(".color");

    colors.forEach((color) => {
      const colorButton = color.querySelector(".color-button");
      colorButton.innerText = this.changeColor(color.id.split("-")[1]);

      this.atualizarListaCores();
    });
  }

  generateColorDiv(i) {
    const palette = document.querySelector(".palette");
    const color = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    const colors = document.querySelectorAll(".color");

    if (colors.length > 10) {
      alert("Você atingiu o limite de cores!");
      return;
    }

    buttonsDiv.classList.add("buttons");
    buttonsDiv.style.height = "auto";
    color.classList.add("color");
    color.id = `color-${i}`;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "x";

    deleteButton.addEventListener("click", () => {
      color.remove();
      this.atualizarListaCores();
    });

    buttonsDiv.appendChild(deleteButton);
    color.appendChild(buttonsDiv);

    palette.appendChild(color);

    this.generateHexCopyButtons(color, i);
    this.atualizarListaCores();
    this.lastIndex++;
  }

  generateHexCopyButtons(color, i) {
    let colorButton = document.createElement("button");
    let copyButton = document.createElement("button");
    let currentColor = this.changeColor(i);

    colorButton.classList.add("color-button");
    copyButton.classList.add("copy-button");

    colorButton.innerText = currentColor;
    copyButton.innerText = "Copiar";

    colorButton.addEventListener("click", () => {
      currentColor = this.changeColor(i);
      colorButton.innerText = currentColor;
      copyButton.innerText = "Copiar";
      this.atualizarListaCores();
    });

    copyButton.addEventListener("click", () => {
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

  atualizarListaCores() {
    const colors = document.querySelectorAll(".color");
    this.colors = [];

    colors.forEach((color) => {
      const colorButton = color.querySelector(".color-button");
      const colorText = colorButton.innerText;
      this.colors.push(colorText);
    });

    // Reset all color variables
    document.documentElement.style.setProperty("--color-1", "#000000");
    document.documentElement.style.setProperty("--color-2", "#000000");
    document.documentElement.style.setProperty("--color-3", "#000000");
    document.documentElement.style.setProperty("--color-4", "#000000");
    document.documentElement.style.setProperty("--color-5", "#000000");

    // Update color variables with actual colors
    for (let i = 0; i < this.colors.length; i++) {
      document.documentElement.style.setProperty(`--color-${i + 1}`, this.colors[i]);
    }
  }

  deleteAllColorDivs() {
    const colors = document.querySelectorAll(".color");
    colors.forEach((color) => {
      color.remove();
    });
  }
}
