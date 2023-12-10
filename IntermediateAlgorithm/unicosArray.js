function uniteUnique(...args) {
  const arr = [];
  for (let lista of args) {
    for (let j of lista) {
      if (!arr.includes(j)) {
        arr.push(j);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
