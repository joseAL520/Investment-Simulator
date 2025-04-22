
import { SellecCryptos } from "./components/selectActive"
import { SelectActions } from "./components/selectAction"
import { useEffect, useState } from "react"
import { compression } from "./logic/commission_calculation";
import { calculationRoi } from "./logic/calcularROI";
import { CriptoPorftPost } from "../../services/CriptoPorft";


export const BuySellCryptos = ({typeCrip,apiDataCurrency}) => {

  const [action, setAction] = useState('');
  const [active, setActive] = useState('');
  const [formData, setFormData] = useState({
    activo: '',
    tipoOperacion: '',
    cantidad: '',
    valorTotal: '',
    fechaHora: '',
    roi: '',
    transaccionId: '',
    valorTotalConComision:'',
  });

  const apiCurrency = apiDataCurrency?.['Realtime Currency Exchange Rate'];
  const formDataCurrency = apiCurrency
    ? {
        fromCurrencyCode: apiCurrency['1. From_Currency Code'],
        fromCurrencyName: apiCurrency['2. From_Currency Name'],
        toCurrencyCode: apiCurrency['3. To_Currency Code'],
        toCurrencyName: apiCurrency['4. To_Currency Name'],
        exchangeRate: apiCurrency['5. Exchange Rate'],
        lastRefreshed: apiCurrency['6. Last Refreshed'],
        timeZone: apiCurrency['7. Time Zone'],
        bidPrice: apiCurrency['8. Bid Price'],
        askPrice: apiCurrency['9. Ask Price']
      }
    : null;

  useEffect(() => {
    typeCrip(active);
  }, [active]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirm = async () => {
    if (action && active) {
      const fechaActual = new Date().toISOString();
      const valorTotal = formData.cantidad * parseFloat(formDataCurrency?.exchangeRate || 1);

    
      const datosFinales = {
        ...formData,
        activo: active,
        tipoOperacion: action,
        valorTotal: valorTotal.toFixed(2),
        valorTotalConComision:`${compression(action,valorTotal)}`,
        fechaHora: fechaActual,
        roi:`${calculationRoi(action,valorTotal,formData,setFormData)}`,
        transaccionId: `tx-${Date.now()}`
      };
       CriptoPorftPost(datosFinales);
    } else {
      alert('Selecciona un activo y tipo de operación');
    }
  };

 return (<>
  <h2 className='text-center text-2xl font-bold'>Comprar / Vender Activos</h2>

  <section className='m-5'>
    <div className='flex flex-col gap-4'>

      <SellecCryptos typActive={setActive} />
      <SelectActions typeAction={setAction} />

      
      <label className='label'>
        Cantidad a operar
      </label>
      <input
        type='number'
        name='cantidad'
        className='input input-bordered w-20'
        value={formData.cantidad}
        onChange={handleChange}
      />

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
          <label className='label font-semibold'> {action === 'comprar' ? '1.5%' : action === 'vender' ? '1.2%' : '0%'}</label>
        </div>

      </div>

      <button className='btn btn-warning self-center' onClick={handleConfirm}>
        Confirmar Operación
      </button>

    </div>
  </section>
</>)
}
