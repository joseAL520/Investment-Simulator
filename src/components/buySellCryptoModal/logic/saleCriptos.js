import { CriptoPorftPost } from "../../../services/CriptoPorft";
import { commissionCripto } from "./commission_calculation";

export const saleCriptos = (formData,action,active,quantity,formDataCurrency) => {
    const fechaActual = new Date().toISOString();
    const valorTotal = quantity * parseFloat(formDataCurrency?.exchangeRate || 1);
    const valorTotalConComision = commissionCripto(action ,valorTotal)

    const datosFinales = {
        ...formData,
        transaccionId: `tx-${Date.now()}`,
        activo: active,
        tipoOperacion: action,
        cantidad: quantity,
        valorActualCripto: formDataCurrency?.exchangeRate,
        fechaHoraVenta: fechaActual,
        valorTotalConComisionVenta:valorTotalConComision  ,
        roi: ''
    };
    CriptoPorftPost(datosFinales)
    window.location.reload();
  
}