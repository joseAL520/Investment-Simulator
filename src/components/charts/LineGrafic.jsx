import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options } from './logic/options';
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
import { daily, monthly, Weekly } from './logic/chartData';

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

 const LineChartWithGradient = ({apiData}) => {

  const [option,Setoptions] = useState(options)
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });


  useEffect(() => {
    
    if (!apiData || Object.keys(apiData).length === 0) return;
    const data = [];
    const chart = chartRef.current;
    if (!chart) return;
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 145);
    gradient.addColorStop(0, '#ffbf00');
    gradient.addColorStop(1, '#161212');

    const timeSeriesHandlers = [
      { key: 'Time Series (Digital Currency Daily)', handler: daily },
      { key: 'Time Series (Digital Currency Weekly)', handler: Weekly },
      { key: 'Time Series (Digital Currency Monthly)', handler: monthly },
    ];
    
    timeSeriesHandlers.forEach(({ key, handler }) => {
      if (apiData[key]) {
        handler(apiData[key]).forEach(val => data.push(val));
      }
    });

    setChartData({
      labels: data[0],
      datasets: [
        {
          data: data[1],
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
  }, [apiData]);



  return (<>
    <Line width={680} height={200} ref={chartRef} data={chartData} options={option} />
  </>);
};

export default LineChartWithGradient;
