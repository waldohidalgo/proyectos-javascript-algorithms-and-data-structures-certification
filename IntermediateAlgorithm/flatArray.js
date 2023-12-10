function steamrollArray(arr) {
  if (arr.every((e) => !Array.isArray(e))) {
    return arr;
  } else {
    const newArr = [];
    for (let elem of arr) {
      if (elem.constructor == Array) {
        newArr.push(...elem);
      } else {
        newArr.push(elem);
      }
    }
    if (newArr.every((e) => !Array.isArray(e))) {
      return newArr;
    } else {
      return flatArray(newArr);
    }
  }
}

steamrollArray([1, [2], [3, [[4]]]]);
