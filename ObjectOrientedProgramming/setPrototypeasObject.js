function Gatos(name) {
  this.name = name;
}

const gato1 = new Gatos("pancho");
Gatos.prototype = {
  raza: "comun",
};
console.log(gato1.constructor);
