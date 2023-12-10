class Boton {
  constructor(color) {
    this.color = color;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Botón de color " + this.color + " clickeado");
  }
}

const botonRojo = new Boton("rojo");
const botonAzul = new Boton("azul");

document
  .getElementById("botonRojo")
  .addEventListener("click", botonRojo.handleClick);
document
  .getElementById("botonAzul")
  .addEventListener("click", botonAzul.handleClick);
