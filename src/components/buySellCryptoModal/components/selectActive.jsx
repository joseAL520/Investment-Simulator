import React, { useRef, useState, useEffect } from 'react';
import { options } from '../logic/optiosCriptos';

export const SellecCryptos = ({ typActive }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    typActive(selected.value);
  }, [selected, typActive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-xs sm:max-w-sm relative" ref={dropdownRef}>
      <label className="label">Activos</label>

      <button
        className="select select-md w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="flex items-center gap-2 text-sm sm:text-base">
          <img src={selected.img} alt={selected.label} className="w-5 h-5 object-contain" />
          {selected.label}
        </span>
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-base-100 border rounded-box shadow-md max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li key={option.value}>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-base-200 text-sm sm:text-base"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                <img src={option.img} alt={option.label} className="w-5 h-5 object-contain" />
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
