const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

const otroObjeto = {
  nombre: "Ana",
};

// Utilizando bind para cambiar el contexto this
const funcionSaludar = persona.saludar.bind(otroObjeto);

funcionSaludar(); // Salida: Hola, soy Ana
