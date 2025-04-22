
import Card from '../components/ui/Card'
import { BuySellCryptos } from '../components/buySellCryptoModal/BuySellCryptos'
import LineGrafic  from '../components/charts/LineGrafic'
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto'
import { useCallback, useState } from 'react'
import AlphaEffectLine from '../services/AlphaEffectLine'
import { AlphaEffectCurrency } from '../services/AlphaEffectCurrency'

export const Dashboard = () => {

  const [apiData, setApiData] = useState(null);
  const [apiDataCurrency,setApiDataCurrency] = useState(null)
  const [typeCript, SetypeCript] = useState('BTC');
  const [selecterTime, setSelecterTime] = useState('TIME_SERIES_DAILY');

  const handleChange = (e) =>{
    const selectedValue = e.target.value;
    setSelecterTime(selectedValue)
  }
  
  // previene el multiple llamado de peticiones
  const handleDataLoaded = useCallback((data) => {
    setApiData(data);
  },[]);

  const handleDataLoadedCurrency = useCallback((data) => {
    setApiDataCurrency(data)
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
                  <option value='DIGITAL_CURRENCY_DAILY'>Diario</option>
                  <option value='DIGITAL_CURRENCY_WEEKLY'>Semanal</option>
                  <option value='DIGITAL_CURRENCY_MONTHLY'>Mensual</option>
              </select>
          </div>
            <LineGrafic  apiData={apiData} ></LineGrafic>
        </div>
        
        <div className="row-span-3 col-start-3 row-start-2 bg-base-200 rounded-md p-3" >
          <BuySellCryptos typeCrip={ SetypeCript } apiDataCurrency={apiDataCurrency} ></BuySellCryptos>
        </div>

        <div className="col-span-2 row-span-2 row-start-4 bg-base-200 rounded-md p-3" >
        <TableHistoryCrypto></TableHistoryCrypto>
        </div>

        <AlphaEffectLine functionTime={selecterTime} onDataLoaded={handleDataLoaded} typeCript={typeCript}></AlphaEffectLine>
        <AlphaEffectCurrency handleDataLoadedCurrency={handleDataLoadedCurrency}  typeCript={typeCript} ></AlphaEffectCurrency>
    </div>
        
  )
}
