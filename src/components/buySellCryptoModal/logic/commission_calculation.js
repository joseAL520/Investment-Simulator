
export  const compression = (action,valorTotal) => {

    const comisionCompra = 0.015;  
    const comisionVenta = 0.012;   

    let comision = 0;
    if (action === 'comprar') {
      comision = valorTotal * comisionCompra;  
    } else if (action === 'vender') {
      comision = valorTotal * comisionVenta;   
    }
    const valorTotalConComision = valorTotal - comision;

    return valorTotalConComision
}