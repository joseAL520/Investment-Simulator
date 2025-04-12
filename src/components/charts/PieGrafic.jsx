import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { data, options } from './logic/optionesPie';
import { Info } from './info/infoCript';


export const PieChart = () => {

  return (<>
    <h1 className='p-2'>Distribución del Portafolio</h1>

    <section className='flex flex-row items-center'>
        <div className="">
            <Doughnut data={data} options={options} />
        </div>

        <div>
            <Info></Info>
        </div>

    </section>

  </>);
};

export default PieChart;
