
import { SellecCryptos } from "./components/selectActive"
import { SelectActions } from "./components/selectAction"
import { useEffect, useState } from "react"

import { SelectCount } from "./components/selectCount";
import { InfoCripotos } from "./components/infoCripotos";
import { ModalVerific } from "../ui/ModalVerific";


export const BuySellCryptos = ({typeCrip,apiDataCurrency}) => {

  const [typeAction, setTypeAction] = useState(''); //comprar o vender
  const [typeCripto, setTypeCripto] = useState(''); // tipo de cripto
  const [quantity,setQuantity] = useState(0);
  const [formData] = useState({
    transaccionid: '',
    img:'',
    nombreactivo:'',
    //comprar
    activo: '',
    tipooperacion: '',
    cantidad: '',
    valoractualcripto: '',
    fechahoracompra: '',
    valortotalconcomisioncompra:null,
    //venta
    roi: '',
    fechahoraventa:'',
    valortotalconcomisionventa:null,

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


 return (<>
  <h2 className='text-center text-2xl font-bold'>Comprar / Vender Activos</h2>

  <section className='m-5'>
    <div className='flex flex-col gap-4'>

      <SellecCryptos typActive={setTypeCripto} />
      <SelectActions typeAction={setTypeAction} />
      <SelectCount quantity={setQuantity} typeAction={typeAction} typeCripto={typeCripto} />
      <InfoCripotos formDataCurrency={formDataCurrency} typeAction={typeAction}></InfoCripotos>
      <ModalVerific formData={formData} typeAction={typeAction} typeCripto={typeCripto} quantity={quantity} formDataCurrency={formDataCurrency}></ModalVerific>
    </div>
  </section>
</>)
}
