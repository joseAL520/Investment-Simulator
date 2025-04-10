import React from 'react'
import Card from '../components/ui/Card'
import { BuySellCryptos } from '../components/buySellCryptoModal/BuySellCryptos'

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4">
        <div className="col-span-3  p-1">
          <Card></Card>
        </div>
        
        <div className="col-span-2 row-span-2 row-start-2  bg-base-200 rounded-md p-3" >
          2 - grafica 
        </div>
        
        <div className="row-span-3 col-start-3 row-start-2 bg-base-200 rounded-md p-3" >
          <BuySellCryptos></BuySellCryptos>
        </div>

        <div className="col-span-2 row-span-2 row-start-4 bg-base-200 rounded-md p-3" >
          4 - tabla de activos recientes
        </div>
    </div>
        
  )
}
