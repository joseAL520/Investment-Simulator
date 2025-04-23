import React, { useState } from 'react'

export const SelectCount = ({countNumber,quantity}) => {
    
    countNumber = 0


    const [count, setCount] = useState(countNumber)
    const [error, setError] = useState(false)

    
    const handleChange = (e) => {
        const { value } = e.target 
        if( value <= 0){
            setCount(0)
            setError(true)
          return  
        }
        setCount(value)
        quantity(value)
        setError(false)
    };

  
    

  return (
    <>

    <label className='label'>
        Cantidad a operar
    </label>
      <input
        type='number'
        name='cantidad'
        className='input input-bordered w-20'
        value={count}
        onChange={handleChange}
      />
    
    <span className='text-error font-[1]'>{error ? 'No se acceptas campos menores que ceros':''}</span>
    
    </>
  )
}
