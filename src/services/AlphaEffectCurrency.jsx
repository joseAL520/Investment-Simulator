import React, { useEffect } from 'react'

export const AlphaEffectCurrency = ({handleDataLoadedCurrency,typeCript}) => {
 //SKJ7P2VQ012QC3TU
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${typeCript}&to_currency=EUR&apikey=demo`); // Cambia URL
        const data = await res.json();
        handleDataLoadedCurrency(data); // Pasamos los datos al componente padre
      } catch (error) {
        console.error('Error al cargar datos:', error);
        handleDataLoadedCurrency(null); // Puedes pasar null si ocurre un error
      }
    };

    fetchData();
  }, [handleDataLoadedCurrency,typeCript]);

 return null
  
}

export default AlphaEffectCurrency;