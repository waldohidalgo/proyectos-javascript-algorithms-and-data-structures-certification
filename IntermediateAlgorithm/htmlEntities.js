function convertHTML(str) {
  const obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/&|>|<|"|'/g, (e) => {
    return obj[e];
  });
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
