import { CriptoPorfInvtGet } from "../../services/CriptoPorft";
import { searchActive } from "../buySellCryptoModal/logic/optiosCriptos";

export const TableHistoryPortfoli = () => {
  const { cripto } = CriptoPorfInvtGet();

  const searchImge = (code) => {
    const { img } = searchActive(code);
    return img;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra w-full min-w-[640px] text-sm sm:text-base">
        <thead>
          <tr>
            <th>#</th>
            <th>Activo</th>
            <th>Cantidad</th>
            <th>Valor Invertido</th>
            <th>Ganancia</th>
            <th>Pérdida</th>
          </tr>
        </thead>
        <tbody>
          {cripto.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                      <img
                        src={searchImge(value.activo)}
                        alt={value.activo}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{value.activo}</div>
                  </div>
                </div>
              </td>
              <td>{value.cantidad_disponible}</td>
              <td className="text-warning">
                ${parseFloat(value.valor_invertido).toFixed(2)}
              </td>
              <td className="text-success">
                ${parseFloat(value.ganancia_total).toFixed(2)}
              </td>
              <td className="text-error">
                ${parseFloat(value.perdida).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
