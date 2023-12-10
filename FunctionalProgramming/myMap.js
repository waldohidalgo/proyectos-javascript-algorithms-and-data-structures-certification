Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((elem, index, arr) => {
    newArray.push(callback(elem, index, arr));
  });
  // Only change code above this line
  return newArray;
};

console.log(
  [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])
);
