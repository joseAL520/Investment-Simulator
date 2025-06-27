import React from 'react';

export const InfoCripotos = ({ formDataCurrency, typeAction }) => {
  const exchangeRate = parseFloat(formDataCurrency?.exchangeRate || 0).toFixed(2);
  const commission =
    typeAction === 'comprar' ? '1.5%' : typeAction === 'vender' ? '1.2%' : '0%';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base w-full">
      <div>
        <label className="label">Precio Actual:</label>
      </div>
      <div className="text-right">
        <label className="label font-semibold">${exchangeRate}</label>
      </div>

      <div>
        <label className="label">Comisión Estimada:</label>
      </div>
      <div className="text-right">
        <label className="label font-semibold">{commission}</label>
      </div>
    </div>
  );
};
