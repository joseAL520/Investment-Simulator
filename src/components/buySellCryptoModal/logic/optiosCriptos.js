export const options = [
  { label: 'Bitcoin', value: 'BTC', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png' },
  { label: 'Ethereum', value: 'ETH', img: 'https://cdn-icons-png.flaticon.com/512/15301/15301597.png' },
  { label: 'Binance Coin', value: 'BNB', img: 'https://cdn-icons-png.flaticon.com/512/15301/15301504.png' },
  { label: 'XRP', value: 'XRP', img: 'https://cdn-icons-png.flaticon.com/512/6675/6675833.png' },
  { label: 'Polygon', value: 'MATIC', img: 'https://cdn-icons-png.flaticon.com/512/7016/7016537.png' },
  { label: 'Dogecoin', value: 'DOGE', img: 'https://cdn-icons-png.flaticon.com/512/7320/7320825.png' },
  { label: 'Solana', value: 'SOL', img: 'https://cdn-icons-png.flaticon.com/512/14446/14446237.png' },
];


export const searchActive = (code) => {
   return options.find(value => value.value === code);
}