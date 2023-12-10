function Gatos(name) {
  this.name = name;
}

const gato1 = new Gatos("pancho");
Gatos.prototype.raza = "angora";
for (let key in gato1) {
  console.log(key);
  if (gato1.hasOwnProperty(key)) {
    console.log("property own: ", key);
  } else {
    console.log("property NO own: ", key);
  }
}
