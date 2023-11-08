class Helpers {
  hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  generatePallete() {
    const palette = document.querySelector(".palette");

    for (let i = 1; i < 5; i++) {
      let color = document.createElement("div");
      color.classList.add("color");
      color.id = `color-${i}`;

      palette.appendChild(color);
    }
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
