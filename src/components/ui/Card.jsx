import { calcularRoiGlobal } from "../../logic/calculationRoiGeneral"
import { CriptoPorfInvtGet, CriptoPorftGet } from "../../services/CriptoPorft"

export default function Card({itemMenu}) {
 
    const {cripto} = CriptoPorfInvtGet()
    const {criptos} = CriptoPorftGet()
    const calcularRoiGlo = calcularRoiGlobal(criptos)
    const countActivosGenerla = () => {
        let countActivos = 0
        cripto.map(value => {
          countActivos = countActivos +  value.cantidad_disponible 
        })
        return countActivos
    }

  return (<> 

    {itemMenu === 'Dashboard' ? 
    
    <div className="flex flex-row justify-between gap-2">

        <div className="card w-60 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold">Valor Invertido</h2>
                <p className='text-warning  font-extrabold  text-2xl pt-2 '>$25.000</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold ">ROI General</h2>
                <p className='font-extrabold text-2xl pt-2 '>{calcularRoiGlo}</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-extrabold ">Activos Totales</h2>
                <p className='font-extrabold text-2xl pt-2  text-info'>{countActivosGenerla()}</p>
            </div>
        </div>

    </div>
    
    
    : 
    
    <div className="flex flex-row justify-between gap-2">

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold">Valor Invertido</h2>
                <p className='text-warning  font-extrabold  text-2xl pt-2 '>$25.000</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold ">Ganancia Total</h2>
                <p className='font-extrabold text-2xl pt-2 text-success'>$ 50.000</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold ">Perdidas</h2>
                <p className='font-extrabold text-2xl pt-2  text-error'>6,000</p>
            </div>
        </div>

        <div className="card w-50 bg-base-200 card-xs shadow-sm p-1.5">
            <div className="card-body">
                <h2 className="card-title font-extrabold ">Total de Activos</h2>
                <p className='font-extrabold text-2xl pl-10  text-center '>{countActivosGenerla()}</p>  
                
            </div>
        </div>

</div> } 
    

    


    </>)
}
