import React, { useEffect } from 'react'

export const AlphaEffectLine = ({functionTime,onDataLoaded }) => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.alphavantage.co/query?function=${functionTime}&symbol=IBM&apikey=demo`); // Cambia URL
        const data = await res.json();
        onDataLoaded(data); // Pasamos los datos al componente padre
      } catch (error) {
        console.error('Error al cargar datos:', error);
        onDataLoaded(null); // Puedes pasar null si ocurre un error
      }
    };

    fetchData();
  }, [onDataLoaded,functionTime]);

 return null
  
};

export default AlphaEffectLine;