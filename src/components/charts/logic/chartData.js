export const daily = (apiData) => {
    const timeSeries = apiData;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = 2025;
  
    const filteredDates = Object.keys(timeSeries)
      .filter(date => {
        const d = new Date(date);
        return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
      })
      .sort(); // orden ascendente
  
    const labels = filteredDates.map(date =>
      new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    );
  
    const closePrices = filteredDates.map(date =>
      parseFloat(timeSeries[date]['4. close'])
    );
  
    return [labels, closePrices] ;
}


export const Weekly = (apiData) => {

    const timeSeries = apiData;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-indexed
    const currentYear = 2025;
  
    const filteredDates = Object.keys(timeSeries)
      .filter(date => {
        const d = new Date(date);
        return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
      })
      .sort(); // orden ascendente
  
    const labels = filteredDates.map(date =>
      new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    );
  
    const closePrices = filteredDates.map(date =>
      parseFloat(timeSeries[date]['4. close'])
    );
    return [labels, closePrices] ;
}


export const monthly = (apiData) => {

    const timeSeries = apiData;
    const filteredDates = Object.keys(timeSeries).filter(date => date.startsWith("2025")).sort(); // orden ascendente
    const labels = filteredDates.map(date =>
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
      })
    );
    const closePrices = filteredDates.map(date =>
      parseFloat(timeSeries[date]['4. close'])
    );

   
    return [labels,closePrices]

}

