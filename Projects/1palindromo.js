function palindrome(str) {
  const strCleaned = str
    .replace(/\W|_+/g, "")
    .replace(/\w+/, (e) => e.toLowerCase());
  const reverso = strCleaned.split("").reverse().join("");

  return strCleaned == reverso;
}

console.log(palindrome("eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
