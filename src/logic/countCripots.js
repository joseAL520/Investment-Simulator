
export const countCriptos = (dataCriptos,typeCripto) => {

    let count = 0;
    dataCriptos.map((value) => {
        if( value['activo'] === typeCripto ){
            count = value['cantidad_disponible']
            
        }
    })

   return  count
}