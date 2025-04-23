
export const countCriptos = (dataCriptos,typeCripto) => {

    const countCriptos = []
    let count = 0
 
    dataCriptos.map((value) => {
        if( value['tipoOperacion'] ==='comprar' && value['activo'] === typeCripto ){
            countCriptos.push(value)
        }
    })
    for (let index = 0; index < countCriptos.length; index++) {
        const element = countCriptos[index];
        count =  count + Number(element['cantidad'])
        
    }
   return count 
}