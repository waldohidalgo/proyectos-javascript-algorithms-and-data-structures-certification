function diffArray(arr1, arr2) {
  const newArr = [];
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  for (let elem of set1) {
    if (!set2.has(elem)) {
      newArr.push(elem);
    }
  }
  for (let elem of set2) {
    if (!set1.has(elem)) {
      newArr.push(elem);
    }
  }

  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
