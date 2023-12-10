function myReplace(str, before, after) {
  return str.replace(before, () => {
    const beforeCapitalize = before[0].toUpperCase() + before.slice(1);
    if (before == beforeCapitalize) {
      return after[0].toUpperCase() + after.slice(1);
    } else {
      return after[0].toLowerCase() + after.slice(1);
    }
  });
}

console.log(myReplace("I think we should look up there", "up", "Down"));
