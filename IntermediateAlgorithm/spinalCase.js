function spinalCase(str) {
  const regex = /\s+|(?=[A-Z])|_+|-+/g;
  const arr = str.split(regex).map((elem) => elem.toLowerCase());
  return arr.join("-");
}

spinalCase("This Is Spinal Tap");
