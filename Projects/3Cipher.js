function rot13(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return str.replace(/[a-zA-Z]/g, (letra) => {
    const indice = alphabet.indexOf(letra.toLowerCase());
    return alphabet[(indice + 13) % 26].toUpperCase();
  });
}

rot13("SERR PBQR PNZC");
