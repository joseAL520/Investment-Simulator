import { gananciaGeneral, invertidoGeneral, perdidaGeneral } from "../../logic/calculationModalGeneral"
import { calcularRoiGlobal } from "../../logic/calculationRoiGeneral"
import { CriptoPorfInvtGet, CriptoPorftGet } from "../../services/CriptoPorft"

export default function Card({ itemMenu }) {

  const { cripto } = CriptoPorfInvtGet()
  const { criptos } = CriptoPorftGet()
  const calcularRoiGlo = calcularRoiGlobal(criptos)
  const calculoinvGeneral = invertidoGeneral(cripto);
  const calculoGanancia = gananciaGeneral(cripto);
  const calculoPerdida = perdidaGeneral(cripto);

  const countActivosGenerla = () => {
    let countActivos = 0
    cripto.map(value => {
      countActivos = countActivos + value.cantidad_disponible
    })
    return countActivos
  }

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
          <div className="card-body">
            <h2 className="card-title font-extrabold">Valor Invertido</h2>
            <p className='text-warning font-extrabold text-2xl pt-2'>${calculoinvGeneral}</p>
          </div>
        </div>

        {itemMenu === 'Dashboard' ? (
          <>
            <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
              <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold">ROI General</h2>
                <p className='font-extrabold text-2xl pt-2'>{calcularRoiGlo}</p>
              </div>
            </div>

            <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
              <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold">Activos Totales</h2>
                <p className='font-extrabold text-2xl pt-2 text-info'>{countActivosGenerla()}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
              <div className="card-body">
                <h2 className="card-title font-extrabold">Ganancia Total</h2>
                <p className='font-extrabold text-2xl pt-2 text-success'>${calculoGanancia}</p>
              </div>
            </div>

            <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
              <div className="card-body">
                <h2 className="card-title font-extrabold">Perdidas</h2>
                <p className='font-extrabold text-2xl pt-2 text-error'>${calculoPerdida}</p>
              </div>
            </div>

            <div className="card flex-1 min-w-[250px] bg-base-200 shadow-sm p-1.5">
              <div className="card-body text-center">
                <h2 className="card-title font-extrabold">Total de Activos</h2>
                <p className='font-extrabold text-2xl pt-2 text-info'>{countActivosGenerla()}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
