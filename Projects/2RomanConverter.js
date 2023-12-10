function convertToRoman(num) {
  function operaciones(numeroPiso, simbolo) {
    const vecesMenor = Math.floor(num / numeroPiso);
    const vecesSimbolo = simbolo.repeat(vecesMenor);
    if (num % numeroPiso != 0) {
      return vecesSimbolo + convertToRoman(num % numeroPiso);
    } else {
      return vecesSimbolo;
    }
  }

  if (num < 5000 && num >= 1000) {
    return operaciones(1000, "M");
  } else if (num < 1000 && num >= 900) {
    return operaciones(900, "CM");
  } else if (num < 900 && num >= 500) {
    return operaciones(500, "D");
  } else if (num < 500 && num >= 400) {
    return operaciones(400, "CD");
  } else if (num < 400 && num >= 100) {
    return operaciones(100, "C");
  } else if (num < 100 && num >= 90) {
    return operaciones(90, "XC");
  } else if (num < 90 && num >= 50) {
    return operaciones(50, "L");
  } else if (num < 50 && num >= 40) {
    return operaciones(40, "XL");
  } else if (num < 40 && num >= 10) {
    return operaciones(10, "X");
  } else if (num < 10 && num >= 9) {
    return operaciones(9, "IX");
  } else if (num < 9 && num >= 5) {
    return operaciones(5, "V");
  } else if (num < 5 && num >= 4) {
    return operaciones(4, "IV");
  } else if (num < 4 && num >= 1) {
    return operaciones(1, "I");
  }
}

console.log(convertToRoman(3999));
