function sumFibs(num) {
  const generaFibonacciNumber = (n) => {
    if (n == 1) {
      return 0;
    }
    if (n == 2) {
      return 1;
    }
    return generaFibonacciNumber(n - 1) + generaFibonacciNumber(n - 2);
  };
  let suma = 0;

  for (let i = 1; generaFibonacciNumber(i) <= num; i++) {
    if (generaFibonacciNumber(i) % 2 == 1) {
      suma += generaFibonacciNumber(i);
    }
  }
  return suma;
}

console.log(sumFibs(75025));
