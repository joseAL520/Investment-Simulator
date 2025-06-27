import React from 'react';

export const SelectActions = ({ typeAction }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    typeAction(selectedValue);
  };

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="selectedAction" className="label font-medium">
        Acción
      </label>
      <select
        id="selectedAction"
        name="selectedAction"
        className="select select-md w-full"
        defaultValue=""
        onChange={handleChange}
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        <option value="comprar">Comprar</option>
        <option value="vender">Vender</option>
      </select>
    </div>
  );
};

export default SelectActions;
