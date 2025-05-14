
export const invertidoGeneral = (cripto) => {
    let invertido = 0;
    cripto.map( (value)=>{
       invertido = invertido + value.valor_invertido
    })
    return parseFloat( invertido).toLocaleString()
}

export const gananciaGeneral = (cripto) => {
    let ganancia = 0;
    cripto.map( (value)=>{
       ganancia = ganancia + value.ganancia_total
    })
    return parseFloat( ganancia).toLocaleString()
}


export const perdidaGeneral = (cripto) => {
    let perdi = 0;
    cripto.map( (value)=>{
       perdi = perdi + value.perdida
    })
    return parseFloat( perdi).toLocaleString()
}