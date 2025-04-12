import React from 'react'
import Card from '../components/ui/Card'
import PieChart from '../components/charts/PieGrafic'

export const Portafolio = () => {
  return (
    <div className='flex flex-col m-5 p-2 rounded-md gap-3'> 
      
      <section><Card></Card></section>
      <div className="grid place-items-center">
        <section className='bg-base-200 rounded-md p-4 w-150 ' > <PieChart></PieChart> </section>
      </div>

      <section>3</section>

      
    </div>
  )
}
