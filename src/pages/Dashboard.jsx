
import Card from '../components/ui/Card'
import { BuySellCryptos } from '../components/buySellCryptoModal/BuySellCryptos'
import LineGrafic  from '../components/charts/LineGrafic'
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto'
import { useCallback, useState } from 'react'
import AlphaEffectLine from '../services/AlphaEffectLine'

export const Dashboard = () => {

  const [apiData, setApiData] = useState(null);
  const [selecterTime, setSelecterTime] = useState('TIME_SERIES_DAILY');

  const handleChange = (e) =>{
    const selectedValue = e.target.value;
    setSelecterTime(selectedValue)
  }
  
  // previene el multiple llamado de peticiones
  const handleDataLoaded = useCallback((data) => {
    setApiData(data);
  },[]);

  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4">
        <div className="col-span-3  p-1">
          <Card itemMenu={'Dashboard'}></Card>
        </div>
        
        <div className="col-span-2 row-span-2 row-start-2  bg-base-200 rounded-md p-3" >
          <h2 className='m-1'>Evolución del Mercado</h2>
          <div className="flex flex-col items-end">
              <select 
                className="select select-warning w-30"
                onChange={handleChange}>
                  <option value='TIME_SERIES_DAILY'>Diario</option>
                  <option value='TIME_SERIES_WEEKLY'>Semanal</option>
                  <option value='TIME_SERIES_MONTHLY'>Mensual</option>
              </select>
          </div>
            <LineGrafic  apiData={apiData} ></LineGrafic>
        </div>
        
        <div className="row-span-3 col-start-3 row-start-2 bg-base-200 rounded-md p-3" >
          <BuySellCryptos></BuySellCryptos>
        </div>

        <div className="col-span-2 row-span-2 row-start-4 bg-base-200 rounded-md p-3" >
        <TableHistoryCrypto></TableHistoryCrypto>
        </div>


        <AlphaEffectLine functionTime={selecterTime} onDataLoaded={handleDataLoaded} ></AlphaEffectLine>
    </div>
        
  )
}
