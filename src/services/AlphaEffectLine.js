

export const getCryptoData = async (functionTime, typeCript) => {
  const res = await fetch(`https://www.alphavantage.co/query?function=${functionTime}&symbol=${typeCript}&market=EUR&apikey=demo`);
  const data = await res.json();
  return data;
};