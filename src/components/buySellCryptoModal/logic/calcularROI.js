

export const calculationRoi = (valorInicial, valorFinal,) => {
 
  const comision = 0.012; // 1.2%
  const valorInicialConComision = valorInicial * (1 + comision); // Agregamos la comisión al valor inicial
  const roi = ((valorFinal - valorInicialConComision) / valorInicialConComision) * 100;
  return roi;
}
 

