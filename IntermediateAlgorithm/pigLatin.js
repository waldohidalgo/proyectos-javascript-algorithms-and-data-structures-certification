function translatePigLatin(str) {
  if (/^[^aeiou]+/.test(str)) {
    const coincidencia = str.match(/^[^aeiou]+/)[0];
    const largo = coincidencia.length;
    return str.slice(largo) + coincidencia + "ay";
  } else {
    return str + "way";
  }
}

console.log(translatePigLatin("schwartz"));
