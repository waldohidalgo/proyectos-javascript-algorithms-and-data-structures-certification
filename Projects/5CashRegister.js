function checkCashRegister(price, cash, cid) {
  const objetoVuelto = {};
  let montoEnCaja = 0;
  let vuelto = cash - price;
  const objetoCID = {};
  for (let par of cid) {
    objetoCID[par[0]] = par[1];
    montoEnCaja += par[1];
  }
  if (montoEnCaja < vuelto) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  function operacion(
    tipoMoneda,
    valorMoneda,
    vuelto,
    objetoVuelto,
    montoEnCaja
  ) {
    let VueltoXMonedaDar = valorMoneda * Math.floor(vuelto / valorMoneda);

    if (VueltoXMonedaDar >= objetoCID[tipoMoneda]) {
      vuelto = +(vuelto - objetoCID[tipoMoneda]).toFixed(2);
      objetoVuelto[tipoMoneda] = objetoCID[tipoMoneda];
      montoEnCaja = +(montoEnCaja - objetoCID[tipoMoneda]).toFixed(2);
      objetoCID[tipoMoneda] = 0;
    } else {
      objetoCID[tipoMoneda] = +(
        objetoCID[tipoMoneda] - VueltoXMonedaDar
      ).toFixed(2);
      vuelto = +(vuelto - VueltoXMonedaDar).toFixed(2);
      objetoVuelto[tipoMoneda] = VueltoXMonedaDar;
      montoEnCaja = +(montoEnCaja - VueltoXMonedaDar).toFixed(2);
    }

    return [vuelto, montoEnCaja];
  }

  if (vuelto >= 100) {
    [vuelto, montoEnCaja] = operacion(
      "ONE HUNDRED",
      100,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 20) {
    [vuelto, montoEnCaja] = operacion(
      "TWENTY",
      20,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 10) {
    [vuelto, montoEnCaja] = operacion(
      "TEN",
      10,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 5) {
    [vuelto, montoEnCaja] = operacion(
      "FIVE",
      5,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 1) {
    [vuelto, montoEnCaja] = operacion(
      "ONE",
      1,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 0.25) {
    [vuelto, montoEnCaja] = operacion(
      "QUARTER",
      0.25,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 0.1) {
    [vuelto, montoEnCaja] = operacion(
      "DIME",
      0.1,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 0.05) {
    [vuelto, montoEnCaja] = operacion(
      "NICKEL",
      0.05,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }
  if (vuelto >= 0.01) {
    [vuelto, montoEnCaja] = operacion(
      "PENNY",
      0.01,
      vuelto,
      objetoVuelto,
      montoEnCaja
    );
  }

  if (vuelto == 0 && montoEnCaja == 0) {
    return {
      status: "CLOSED",
      change: cid,
    };
  } else if (vuelto == 0 && montoEnCaja > 0) {
    const arregloVuelto = [];
    for (let key in objetoVuelto) {
      arregloVuelto.push([key, objetoVuelto[key]]);
    }
    arregloVuelto.sort((a, b) => {
      return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
    });

    return {
      status: "OPEN",
      change: arregloVuelto,
    };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}
/*
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
*/
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
