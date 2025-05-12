
import Card from '../components/ui/Card'
import { BuySellCryptos } from '../components/buySellCryptoModal/BuySellCryptos'
import LineGrafic  from '../components/charts/LineGrafic'
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto'
import {  useEffect, useState } from 'react'
import { getCryptoData } from '../services/AlphaEffectLine'
import { getCurrencyData } from '../services/AlphaEffectCurrency'




export const Dashboard = () => {

  const [apiData, setApiData] = useState(null);
  const [apiDataCurrency,setApiDataCurrency] = useState(null)
  const [typeCript, SetypeCript] = useState(null);
  const [selecterTime, setSelecterTime] = useState('DIGITAL_CURRENCY_DAILY');
  

  const handleChange = (e) =>{
    const selectedValue = e.target.value;
    setSelecterTime(selectedValue)
  }
  
  useEffect(() => {
    if( !typeCript) return
    getCryptoData(selecterTime, typeCript)
      .then(setApiData)
      .catch((err) => console.error(err));
  }, [selecterTime, typeCript]);

  useEffect(() => {
    if( !typeCript) return
    getCurrencyData(typeCript)
      .then(setApiDataCurrency)
      .catch((err) => console.error(err));
  }, [typeCript])

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
          <BuySellCryptos typeCrip={ SetypeCript } apiDataCurrency={apiDataCurrency}></BuySellCryptos>
        </div>

        <div className="col-span-2 row-span-2 row-start-4 bg-base-200 rounded-md p-3" >
        <TableHistoryCrypto></TableHistoryCrypto>
        </div>

    </div>
        
  )
}
