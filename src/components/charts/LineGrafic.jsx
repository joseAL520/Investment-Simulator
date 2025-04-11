import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options } from './subComponents/options';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

 const LineChartWithGradient = () => {


  const [option,Setoptions] = useState(options)
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 145);
    gradient.addColorStop(0, '#ffbf00');
    gradient.addColorStop(1, '#161212');

    setChartData({
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
      datasets: [
        {
          label: '',
          data: [67000, 68000, 66500, 69000, 68500, 69500, 70000],
          fill: true,
          backgroundColor: gradient,
          borderColor: '#ffbf00',
          borderWidth: 1.5,
          tension: 0.3,
          pointRadius:3,
          pointHoverRadius: 5
        }
      ]
    });
  }, []);



  return (<>
    <h2 className='m-1'>Evolución del Mercado</h2>
    <Line width={680} height={200} ref={chartRef} data={chartData} options={option} />
  </>);
};

export default LineChartWithGradient;
