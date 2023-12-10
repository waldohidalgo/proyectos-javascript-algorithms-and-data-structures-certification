function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    let isInCollection = 1;
    for (let key in source) {
      if (obj[key] && obj[key] == source[key]) {
        isInCollection *= 1;
      } else {
        isInCollection *= 0;
      }
    }
    return isInCollection;
  });
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
