
export const options = {
    
    responsive: true,

    plugins: {
      legend: {display: false,} 
    },


    scales: {
      y: {
        ticks: {
          callback: (val) => {
            return '$' + val;
          },
        },
      },
    },

    layout: {
        padding: 12,
    }
    
};