import { CriptoPorftGet, CriptoPorftPost } from "../../../services/CriptoPorft";
import { commissionCripto } from "./commission_calculation";
import { searchActive } from "./optiosCriptos";



export const buyCryptos = async (formData,typeAction,typeCripto,quantity,formDataCurrency) => {
    const fechaActual = new Date().toISOString();
    const valorTotal = quantity * parseFloat(formDataCurrency?.exchangeRate || 1);
    const valorTotalConComision = commissionCripto(typeAction ,valorTotal);
    const dataCripto = searchActive(typeCripto)

    const datosFinales = {
        ...formData,
        transaccionid: `tx-${Date.now()}`,
        activo: typeCripto,
        tipooperacion: typeAction,
        cantidad: Number(quantity),
        valoractualcripto: formDataCurrency?.exchangeRate,
        fechahoracompra: fechaActual,
        valortotalconcomisioncompra:valorTotalConComision  ,
        img:dataCripto.img,
        nombreactivo:dataCripto.label
    };

    CriptoPorftPost(datosFinales);
    //window.location.reload();
}