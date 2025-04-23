import { CriptoPorftPost } from "../../../services/CriptoPorft";
import { commissionCripto } from "./commission_calculation";


export const buyCryptos = async (formData,typeAction,typeCripto,quantity,formDataCurrency) => {

    const fechaActual = new Date().toISOString();
    const valorTotal = quantity * parseFloat(formDataCurrency?.exchangeRate || 1);
    const valorTotalConComision = commissionCripto(typeAction ,valorTotal)

    const datosFinales = {
        ...formData,
        transaccionId: `tx-${Date.now()}`,
        activo: typeCripto,
        tipoOperacion: typeAction,
        cantidad: quantity,
        valorActualCripto: formDataCurrency?.exchangeRate,
        fechaHoraCompra: fechaActual,
        valorTotalConComisionCompra:valorTotalConComision  ,
    };

    console.log(datosFinales)
    // CriptoPorftPost(datosFinales);
}