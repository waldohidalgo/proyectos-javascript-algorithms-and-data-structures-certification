function sumPrimes(num) {
  let suma = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = 1;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = 0;
        break;
      }
    }

    if (isPrime) {
      suma += i;
    }
  }

  return suma;
}

console.log(sumPrimes(977));
