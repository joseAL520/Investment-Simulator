
export const getCurrencyData = async (typeCript) => {
  
  const res = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${typeCript}&to_currency=EUR&apikey=demo`);
  const data = await res.json();
  return data;
};