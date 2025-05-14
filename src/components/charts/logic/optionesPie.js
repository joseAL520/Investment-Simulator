import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { searchActive } from '../../buySellCryptoModal/logic/optiosCriptos';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const label = [];
const dataDoughnut = [];
const colors = [];

export const getDataInvCripto =(cripto)=>{
  if(label.length === 0 && dataDoughnut.length === 0){
   cripto.map( (value) => {
      colors.push(searchColor(value.activo))
      label.push(value.activo);
      dataDoughnut.push(value.cantidad_disponible)
    return
  })
  }
}

const searchColor = (code) =>{
  const {color} =searchActive(code)
  return color
}

export const data = {

    labels: label,
    datasets: [
      {
        label: 'Cantidad',
        data: dataDoughnut,
        backgroundColor: colors,
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