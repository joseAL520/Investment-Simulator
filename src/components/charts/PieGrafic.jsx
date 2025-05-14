
import { Doughnut } from 'react-chartjs-2';
import { data, getDataInvCripto, options } from './logic/optionesPie';
import { Info } from './info/infoCript';
import { CriptoPorfInvtGet } from '../../services/CriptoPorft';


export const PieChart = () => {
  const {cripto} = CriptoPorfInvtGet()
  getDataInvCripto(cripto);
  return (<>
    <h1 className='p-2'>Distribución del Portafolio</h1>

    <section className='flex flex-row items-center'>
        <div className="">
            <Doughnut data={data} options={options} />
        </div>

        <div>
            <Info dataCripto={cripto} key={cripto.id}></Info>
        </div>

    </section>

  </>);
};

export default PieChart;
