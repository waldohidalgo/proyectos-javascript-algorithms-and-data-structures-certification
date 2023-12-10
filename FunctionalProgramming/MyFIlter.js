Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((elem, index, arr) => {
    if (callback(elem, index, arr)) {
      newArray.push(elem);
    }
  });
  // Only change code above this line
  return newArray;
};

console.log(
  [1, 1, 2, 5, 2].myFilter(
    (element, index, array) => array.indexOf(element) === index
  )
);
