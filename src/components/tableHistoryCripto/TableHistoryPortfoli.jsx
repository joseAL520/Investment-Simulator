import { CriptoPorfInvtGet } from "../../services/CriptoPorft"
import { searchActive } from "../buySellCryptoModal/logic/optiosCriptos"

export const TableHistoryPortfoli = () => {
  const {cripto} = CriptoPorfInvtGet()

   const searchImge = (code) =>{
          const {img} =searchActive(code)
         return img
    }

  return (<>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <thead>
      <tr>
        <th></th>
        <th>Activo</th>
        <th>Cantidad</th>
        <th>Valor Invertido</th>
        <th>Ganancia</th>
        <th>Perdida</th>
      </tr>
    </thead>

    <tbody>
      {cripto.map( (value,index) => (

          <tr>
        <th>{index + 1}</th>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                    src={searchImge(value.activo)}
                    alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="font-bold">{value.activo}</div>
                <div className="text-sm opacity-50"></div>
                </div>
            </div>
        </td>
        <td>{value.cantidad_disponible}</td>
        <td className="text-warning">${parseFloat(value.valor_invertido)}</td>
        <td className="text-success">${parseFloat(value.ganancia_total)}</td>
        <td className="text-error">${parseFloat(value.perdida)}</td>
      </tr>
    ))}
    </tbody>
  </table>
</div>
</>)
}
