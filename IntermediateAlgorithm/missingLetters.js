function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const inicial = str[0];
  const final = str[str.length - 1];
  const indexInicial = alphabet.indexOf(inicial);
  const indexFinal = alphabet.indexOf(final);
  let missLetter;
  for (let letra of alphabet.slice(indexInicial, indexFinal + 1)) {
    if (!str.includes(letra)) {
      missLetter = letra;
    }
  }

  return missLetter;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
