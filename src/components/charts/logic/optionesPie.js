import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 50, 100],
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