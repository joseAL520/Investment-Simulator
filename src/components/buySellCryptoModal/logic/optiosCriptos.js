export const options = [
  { label: 'Bitcoin', value: 'BTC', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png', color: '#f7931a', },
  { label: 'Ethereum', value: 'ETH', img: 'https://cdn-icons-png.flaticon.com/512/15301/15301597.png', color: '#3c3c3d', },
  { label: 'Binance Coin', value: 'BNB', img: 'https://cdn-icons-png.flaticon.com/512/15301/15301504.png',color: '#f3ba2f', },
  { label: 'XRP', value: 'XRP', img: 'https://cdn-icons-png.flaticon.com/512/6675/6675833.png', color: '#25a768', },
  { label: 'Polygon', value: 'MATIC', img: 'https://cdn-icons-png.flaticon.com/512/7016/7016537.png', color: '#8247e5', },
  { label: 'Dogecoin', value: 'DOGE', img: 'https://cdn-icons-png.flaticon.com/512/7320/7320825.png',color: '#c2a633',  },
  { label: 'Solana', value: 'SOL', img: 'https://cdn-icons-png.flaticon.com/512/14446/14446237.png', color: '#00ffa3', },
];


export const searchActive = (code) => {
   return options.find(value => value.value === code);
}