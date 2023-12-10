function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((obj) => {
    const newObj = { name: obj["name"] };
    const TRaw = 2 * Math.PI * ((earthRadius + obj["avgAlt"]) ** 3 / GM) ** 0.5;
    const T = Math.round(TRaw);
    newObj["orbitalPeriod"] = T;
    return newObj;
  });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
