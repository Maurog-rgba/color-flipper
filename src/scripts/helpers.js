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

    let button = document.createElement("button");
    button.classList.add("add-button");
    button.innerText = "+";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "x";

    button.addEventListener("click", () => {
      this.generateColorDiv(palette.length + 1);
      this.changeColor(palette.length + 1);
    });

    deleteButton.addEventListener("click", () => {
      color.remove();
    });

    color.appendChild(deleteButton);
    color.appendChild(button);
    palette.appendChild(color);
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
    var input = document.createElement("input");
    input.value = valor;
    document.body.appendChild(input);

    input.select();

    document.execCommand("copy");

    document.body.removeChild(input);
  }
}

export default Helpers;
