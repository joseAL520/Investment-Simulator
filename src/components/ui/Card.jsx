import React from 'react'

export default function Card() {
  return (<> 
    <div className="flex flex-row justify-between gap-2">

        <div className="card w-60 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold">Valor Invertido</h2>
                <p className='text-warning  font-extrabold  text-2xl pt-2 '>$25.000</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold ">ROI General</h2>
                <p className='font-extrabold text-2xl pt-2 '>8,5<span className='text-sm'>%</span></p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold ">Activos Totales</h2>
                <p className='font-extrabold text-2xl pt-2  text-info'>6</p>
            </div>
        </div>

        <div className="card w-60 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body text-center">
                <h2 className="card-title font-extrabold ">Movimiento / Ultima fecha</h2>
                <p className='font-extrabold text-2xl pl-10 text-left '>5 <span className='font-extrabold text-2xl pl-8 text-right'>5/5/2025</span> </p>  
                
            </div>
        </div>

    </div>
       
    
    </>)
}
