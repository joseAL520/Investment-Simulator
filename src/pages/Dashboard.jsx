import Card from '../components/ui/Card'
import { BuySellCryptos } from '../components/buySellCryptoModal/BuySellCryptos'
import LineGrafic from '../components/charts/LineGrafic'
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto'
import { useEffect, useState } from 'react'
import { getCryptoData } from '../services/AlphaEffectLine'
import { getCurrencyData } from '../services/AlphaEffectCurrency'

export const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataCurrency, setApiDataCurrency] = useState(null)
  const [typeCript, SetypeCript] = useState(null);
  const [selecterTime, setSelecterTime] = useState('DIGITAL_CURRENCY_DAILY');

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelecterTime(selectedValue)
  }

  useEffect(() => {
    if (!typeCript) return
    getCryptoData(selecterTime, typeCript)
      .then(setApiData)
      .catch((err) => console.error(err));
  }, [selecterTime, typeCript]);

  useEffect(() => {
    if (!typeCript) return
    getCurrencyData(typeCript)
      .then(setApiDataCurrency)
      .catch((err) => console.error(err));
  }, [typeCript])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {/* Header */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 p-1">
        <Card itemMenu={'Dashboard'} />
      </div>

      {/* Gráfico de línea */}
      <div className="col-span-1 md:col-span-2 bg-base-200 rounded-md p-3">
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
        <LineGrafic apiData={apiData} />
      </div>

      {/* Comprar/Vender criptos */}
      <div className="col-span-1 bg-base-200 rounded-md p-3">
        <BuySellCryptos typeCrip={SetypeCript} apiDataCurrency={apiDataCurrency} />
      </div>

      {/* Historial de criptos */}
      <div className="col-span-1 md:col-span-2 bg-base-200 rounded-md p-3">
        <TableHistoryCrypto />
      </div>
    </div>
  )
}
