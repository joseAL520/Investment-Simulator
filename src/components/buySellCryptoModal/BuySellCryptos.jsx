
import { SellecCryptos } from "./components/selectActive"
import { SelectActions } from "./components/selectAction"
import { useEffect, useState } from "react"

import { SelectCount } from "./components/selectCount";
import { buyCryptos } from "./logic/buyCriptos";


export const BuySellCryptos = ({typeCrip,apiDataCurrency,dataCriptos}) => {

  const [typeAction, setTypeAction] = useState(''); //comprar o vender
  const [typeCripto, setTypeCripto] = useState(''); // tipo de cripto
  const [quantity,setQuantity] = useState(0);
  const [formData] = useState({
    transaccionId: '',
    //comprar
    activo: '',
    tipoOperacion: '',
    cantidad: '',
    valorActualCripto: '',
    fechaHoraCompra: '',
    valorTotalConComisionCompra:'',
    //venta
    roi: '',
    fechaHoraVenta:'',
    valorTotalConComisionVenta:'',

  });
  const dataCripto = dataCriptos
  console.log(dataCripto)
 
  const apiCurrency = apiDataCurrency?.['Realtime Currency Exchange Rate'];
  const formDataCurrency = apiCurrency? {
        fromCurrencyCode: apiCurrency['1. From_Currency Code'],
        fromCurrencyName: apiCurrency['2. From_Currency Name'],
        toCurrencyCode: apiCurrency['3. To_Currency Code'],
        toCurrencyName: apiCurrency['4. To_Currency Name'],
        exchangeRate: apiCurrency['5. Exchange Rate'],
        lastRefreshed: apiCurrency['6. Last Refreshed'],
        timeZone: apiCurrency['7. Time Zone'],
        bidPrice: apiCurrency['8. Bid Price'],
        askPrice: apiCurrency['9. Ask Price']
  }: null;

  useEffect(() => {
    typeCrip(typeCripto);
  }, [typeCripto]);


  const handleConfirm = async () => {
    if (typeAction && typeCripto && quantity) {
      
    
      if(typeAction === 'comprar'){
        buyCryptos(formData,typeAction,typeCripto,quantity,formDataCurrency)
      }

      if(typeAction === 'vender'){
        console.log('vender activos')
      }
    
    } else {
      alert('Selecciona un activo y tipo de operación');
    }
  };

 return (<>
  <h2 className='text-center text-2xl font-bold'>Comprar / Vender Activos</h2>

  <section className='m-5'>
    <div className='flex flex-col gap-4'>

      <SellecCryptos typActive={setTypeCripto} />
      <SelectActions typeAction={setTypeAction} />
      <SelectCount quantity={setQuantity} />

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

      <button className='btn btn-warning self-center' onClick={handleConfirm}>
        Confirmar Operación
      </button>

    </div>
  </section>
</>)
}
