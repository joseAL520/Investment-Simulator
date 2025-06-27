import React from 'react';
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto';

export const Historial = () => {
  return (
    <section className="bg-base-200 m-4 p-4 sm:p-6 rounded-md w-full overflow-x-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Historial de Criptos</h2>
      <TableHistoryCrypto itemMenu="historial" />
    </section>
  );
};
  