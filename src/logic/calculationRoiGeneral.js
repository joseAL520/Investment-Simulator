

export const  calcularRoiGlobal = (transacciones) => {
  let totalInvertido = 0;
  let totalRecuperado = 0;

  transacciones.forEach(tx => {
    const tipo = tx.tipooperacion?.toLowerCase();
    const compra = parseFloat(tx.valortotalconcomisioncompra || '0');
    const venta = parseFloat(tx.valortotalconcomisionventa || '0');

    if (tipo === 'comprar') {
      totalInvertido += compra;
    }

    if (venta > 0) {
      totalRecuperado += venta;
    }
  });

  if (totalInvertido === 0) {
    return '...';
  }

  const ganancia = totalRecuperado - totalInvertido;
  const roi = (ganancia / totalInvertido) * 100;

  return `${roi.toFixed(2)}%`;
}


