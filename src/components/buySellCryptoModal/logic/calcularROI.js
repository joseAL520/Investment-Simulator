

export const calculationRoi = (action,valorTotal,formData,) => {

    const comisionVenta = 0.012;   
    let comision = 0;
    let valorTotalConComision = 0;
    let roi = 0;
      
    if (action === 'vender') {
            comision = valorTotal * comisionVenta;   
        valorTotalConComision = valorTotal - comision;  
            
        
    if (formData.valorCompra) {
            roi = ((valorTotalConComision - formData.valorCompra) / formData.valorCompra) * 100;
        }
    }

    return roi.toFixed(2);

}