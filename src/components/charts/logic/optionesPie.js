import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const label = [];
const dataDoughnut = [];

export const getDataInvCripto =(cripto)=>{
  if(label.length === 0 && dataDoughnut.length === 0){
    console.log('entre')
   cripto.map( (value) => {
    label.push(value.activo);
    dataDoughnut.push(value.cantidad_disponible)
    return
  })
  }
}


export const data = {

    labels: label,
    datasets: [
      {
        label: 'Cantidad',
        data: dataDoughnut,
        backgroundColor: ['#ffbf00', 'red', 'green'],
        borderWidth: 5,
        borderColor: '#161212',

      },
    ],
};

export const options = {
    responsive: false,
    cutout: '75%', // Adjust inner radius (makes it more like a donut)

    plugins: {
        legend: {display: false,} 
    },

};