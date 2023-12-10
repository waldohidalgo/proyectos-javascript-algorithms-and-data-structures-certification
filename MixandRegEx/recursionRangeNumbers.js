function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    const array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}

console.log(rangeOfNumbers(3, 10));
/*
3,5=>[3,4,5]
3,4=>[3,4]

*/
