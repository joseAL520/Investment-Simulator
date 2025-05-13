export  const commissionCripto = (typeAction,valorTotal) => {

    const comisionCompra = 0.015;  
    const comisionVenta = 0.012;  
    let valorTotalConComision = 0
    let comision = 0;

    if (typeAction === 'comprar') {
      comision = valorTotal * comisionCompra;  
      valorTotalConComision = valorTotal - comision;
    } else if (typeAction === 'vender') {
      comision = valorTotal * comisionVenta;  
      valorTotalConComision = valorTotal - comision; 
    }
    
    return valorTotalConComision
}