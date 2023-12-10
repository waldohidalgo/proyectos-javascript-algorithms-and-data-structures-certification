function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.eat();
console.log(beagle.constructor);

/*
Se muestra el encadenamiento de prototipos lo que permite heredar propiedades y métodos entre constructores
*/
