function dropElements(arr, func) {
  const arrCopia = [...arr];
  for (let i = 0; i < arrCopia.length; i++) {
    if (!func(arrCopia[i])) {
      arr.shift();
    } else {
      return arr;
    }
  }

  if (arr.length == 0) {
    return arr;
  }
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
