/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  if (size == 0) {
    return arr;
  } else {
    const veces = Math.ceil(arr.length / size);
    const newArray = [];
    for (let i = 0; i < veces; i++) {
      newArray.push(arr.slice(size * i, size * i + size));
    }
    return newArray;
  }
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
