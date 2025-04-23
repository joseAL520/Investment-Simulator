
import { SellecCryptos } from "./components/selectActive"
import { SelectActions } from "./components/selectAction"
import { useEffect, useState } from "react"

import { SelectCount } from "./components/selectCount";
import { buyCryptos } from "./logic/buyCriptos";
import { saleCriptos } from "./logic/saleCriptos";
import { InfoCripotos } from "./components/infoCripotos";


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
        saleCriptos(formData,typeAction,typeCripto,quantity,formDataCurrency)
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
      <SelectCount quantity={setQuantity} typeAction={typeAction} dataCriptos={dataCriptos} typeCripto={typeCripto} />
      <InfoCripotos formDataCurrency={formDataCurrency} typeAction={typeAction}></InfoCripotos>
      
      <button className='btn btn-warning self-center' onClick={handleConfirm}>
        Confirmar Operación
      </button>

    </div>
  </section>
</>)
}
