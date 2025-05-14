import { searchActive } from "../../buySellCryptoModal/logic/optiosCriptos"


export const  Info = ({dataCripto}) => {

    const searchImge = (code) =>{
        const {img} =searchActive(code)
       return img
    }
    return(<>
        <div className="flex flex-col gap-3 ">
        {dataCripto.map( (value) => (
          
                <div className="flex gap-2">
                    <img src={searchImge(value.activo)} alt="ll" width={25} height={25} /> 
                    <label > {value.activo} </label> 
                    <span>Disponibles: {value.cantidad_disponible}</span>
                </div>
            
        ))}
        </div>
    </>)


}