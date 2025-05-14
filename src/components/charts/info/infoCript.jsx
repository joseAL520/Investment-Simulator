import { searchActive } from "../../buySellCryptoModal/logic/optiosCriptos"


export const  Info = ({dataCripto}) => {

    const searchImge = (code) =>{
        const {img} =searchActive(code)
       return img
    }

    const searchColor = (code) =>{
        const {color} =searchActive(code)
       return color
    }
    return(<>
        <div className="flex flex-col gap-3 ">
        {dataCripto.map( (value) => (
          
                <div className="flex gap-2">
                    <img src={searchImge(value.activo)} alt="ll" width={25} height={25} /> 
                    <label > {value.activo} </label> 
                    <div 
                        className="rounded-full w-3 h-3"
                        style={{ backgroundColor: searchColor(value.activo) }}>
                    </div>
                </div>
            
        ))}
        </div>
    </>)


}