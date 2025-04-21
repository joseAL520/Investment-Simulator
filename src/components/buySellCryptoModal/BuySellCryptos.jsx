
import { SellecCryptos } from "./components/selectActive"
import { SelectActions } from "./components/selectAction"
import { useState } from "react"


export const BuySellCryptos = ({typeCrip}) => {

  const [action, setAction] = useState('')
  const [active, setActive] = useState('')
 
  typeCrip(active)
  const Submit = () =>{
    if(action && active){
      console.log(action,active)
    }
  }


 return (<>
  <h2 className='text-center'>Comprar/vender Activos</h2>
  <section className='m-5'>
    <div className="flex flex-col gap-3.5 ">
    
      <SellecCryptos typActive={setActive}></SellecCryptos>
      <SelectActions typeAction={setAction} ></SelectActions>

      <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div>
                  <label className='label'>Precio Actual:</label>
              </div>
              
              <div className="col-start-1 row-start-2">
                  <label className='label'>Comision Estimada:</label>
              </div>

              <div className="col-start-2 row-start-1"> 
                  <label className='label text-right'>$ 30.000</label> 
              </div>
              
              <div>
                  <label className='label text-right'>11</label>
              </div>
      </div>
        
      <button className='btn btn-warning' onClick={Submit}>  Confirmar Operacion</button>
          
    </div>
  </section>
   
  </>)
}
