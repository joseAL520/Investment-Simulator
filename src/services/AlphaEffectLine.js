import { KEY_ALPHA } from "../environment/dev_env";


export const getCryptoData = async (functionTime, typeCript) => {
  const res = await fetch(`https://www.alphavantage.co/query?function=${functionTime}&symbol=${typeCript}&market=USD&apikey=${KEY_ALPHA}`);
  const data = await res.json();
  return data;
};