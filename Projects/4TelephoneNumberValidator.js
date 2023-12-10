function telephoneCheck(str) {
  return /(^1?\s*\d{3}-?\s*\d{3}-?\s*\d{4}$)|(^1?\s*\(\d{3}\)\s*\d{3}-\d{4}$)/g.test(
    str
  );
}

telephoneCheck("555-555-5555");
