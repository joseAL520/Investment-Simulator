import React, { useState } from 'react';
import { CriptoPorfInvtGet } from '../../../services/CriptoPorft';
import { countCriptos } from '../../../logic/countCripots';

export const SelectCount = ({ quantity, typeAction, typeCripto }) => {
  const { cripto } = CriptoPorfInvtGet();
  const [count, setCount] = useState(0);
  const [countCripots, setcountCripots] = useState(0);
  const countCripto = countCriptos(cripto, typeCripto);

  const handleChangeBuy = (e) => {
    const { value } = e.target;
    if (value <= 0) {
      setCount(0);
      return;
    }
    setCount(value);
    quantity(value);
  };

  const handleChangeSale = (e) => {
    const { value } = e.target;
    if (value <= 0) {
      setcountCripots(0);
      return;
    }
    setcountCripots(value);
    quantity(value);
  };

  const selectBuy = () => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
      <label className="label">Cantidad:</label>
      <input
        type="number"
        name="cantidad"
        className="input input-bordered w-full max-w-[100px]"
        value={count}
        onChange={handleChangeBuy}
      />
    </div>
  );

  const selectSale = () => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
      <label className="label">Cantidad:</label>
      <input
        type="number"
        name="cantidad"
        className="input input-bordered w-full max-w-[100px]"
        value={countCripots}
        onChange={handleChangeSale}
        max={countCripto}
      />
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
      {typeAction === 'comprar' ? selectBuy() : selectSale()}
      {typeAction === 'vender' && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
          <label className="label">Disponibles:</label>
          <label className="label font-semibold">{countCripto}</label>
        </div>
      )}
    </div>
  );
};
