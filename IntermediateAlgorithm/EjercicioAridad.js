function addTogether(...args) {
  if (args.length == 1) {
    if (typeof args[0] == "number") {
      return addTogether.bind(null, ...args);
    } else {
      return;
    }
  } else {
    if (args.every((el) => typeof el == "number")) {
      return args.reduce((acc, el) => acc + el, 0);
    } else {
      return;
    }
  }
}

addTogether(2, 3);
