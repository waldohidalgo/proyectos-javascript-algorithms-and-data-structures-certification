function saludar() {
  console.log("Hola, soy " + this.nombre);
}

const persona = {
  nombre: "Juan",
};

// Utilizando bind para cambiar el contexto this
const funcionSaludar = saludar.bind(persona);

funcionSaludar(); // Salida: Hola, soy Juan
