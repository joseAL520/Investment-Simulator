import React, { useState } from 'react'
import { CriptoPorfInvtGet } from '../../../services/CriptoPorft'
import { countCriptos } from '../../../logic/countCripots'

export const SelectCount = ({quantity,typeAction,typeCripto,}) => {
  
const {criptos} = CriptoPorfInvtGet()
  const [count, setCount] = useState(0)
  const countCripto = countCriptos(criptos,typeCripto)
  const [countCripots, setcountCripots] = useState(0)
  const handleChangeBuy = (e) => {
        const { value } = e.target 
        if( value <= 0){
            setCount(0)
          return  
        }
        setCount(value)
        quantity(value)
  };
  const handleChangeSale = (e) => {
      const { value } = e.target 
      if( value <= 0){
        setcountCripots(0)
        return  
      }
      setcountCripots(value)
      quantity(value)
  };
  
  const selectBuy = () =>{

      return (<>
        <label className='label'>
          Cantidad:
        </label>
        <input
          type='number'
          name='cantidad'
          className='input input-bordered w-20'
          value={count}
          onChange={handleChangeBuy}></input>
      </>)
      
  }
  const selectSale = () =>{
    
      return <>
          
        <label className='label'>
          Cantidad:
        </label>
        <input
          type='number'
          name='cantidad'
          className='input input-bordered w-20'
          value={countCripots}
          onChange={handleChangeSale}
          max={countCripto}
          >
  
        </input>
      </>
  }

return (<>

  <div className="flex gap-2.5">
    {typeAction === 'comprar'? selectBuy() : selectSale() }    
    {typeAction ==='vender'?  
      <div className="flex gap-2.5" >
      <label className='label'>Disponibles: </label>
      <label className='label'> {countCripto} </label>
      </div>: ""
    }
  </div>
  
</>)

}
