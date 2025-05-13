import { CriptoPorftPost } from "../../../services/CriptoPorft";
import { calculationRoi } from "./calcularROI";
import { commissionCripto } from "./commission_calculation";
import { searchActive } from "./optiosCriptos";


export const saleCriptos = (formData,action,active,quantity,formDataCurrency) => {
    const fechaActual = new Date().toISOString();
    const valorTotal = quantity * parseFloat(formDataCurrency?.exchangeRate || 1);
    const valorTotalConComision = commissionCripto(action ,valorTotal)
    const criptoSearch = searchActive(active)

    const datosFinales = {
        ...formData,
        transaccionId: `tx-${Date.now()}`,
        activo: active,
        tipoOperacion: action,
        cantidad: quantity,
        valorActualCripto: formDataCurrency?.exchangeRate,
        fechaHoraVenta: fechaActual,
        valorTotalConComisionVenta:valorTotalConComision  ,
        roi: calculationRoi(valorTotal,valorTotal),
        img:criptoSearch.img,
        nombreActivo:criptoSearch.label,
    };
    CriptoPorftPost(datosFinales)
    window.location.reload();
  
}