function smallestCommons(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);

  const mcd = (n, m) => {
    const max = Math.max.apply(null, [n, m]);
    const min = Math.min.apply(null, [n, m]);
    let mcdNumber = 1;
    for (let i = 1; i <= max; i++) {
      if (max % i == 0 && min % i == 0) {
        mcdNumber = i;
      }
    }
    return mcdNumber;
  };

  const mcm = (n, m) => {
    return (n * m) / mcd(n, m);
  };

  let mcmTodos = 1;
  for (let i = min; i <= max; i++) {
    mcmTodos = mcm(mcmTodos, i);
  }

  return mcmTodos;
}

smallestCommons([1, 5]);
