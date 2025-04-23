
import React from 'react'

export const InfoCripotos = ({formDataCurrency,typeAction}) => {
  return (<>
    
    <div className='grid grid-cols-2 gap-2'>
        <div>
          <label className='label'>Precio Actual:</label>
        </div>
        <div className='text-right'>
          <label className='label font-semibold'>
            ${parseFloat(formDataCurrency?.exchangeRate || 0).toFixed(2)}
          </label>
        </div>

        <div>
          <label className='label'>Comisión Estimada:</label>
        </div>
        <div className='text-right'>
          <label className='label font-semibold'> {typeAction === 'comprar' ? '1.5%' : typeAction === 'vender' ? '1.2%' : '0%'}</label>
        </div>

      </div>
  
  
  </>)
}
