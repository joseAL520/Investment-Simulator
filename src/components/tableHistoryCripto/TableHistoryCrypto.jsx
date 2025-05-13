import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { CriptoPorftGet } from '../../services/CriptoPorft';

export const TableHistoryCrypto = ({ itemMenu }) => {
  const { criptos, loading, error } = CriptoPorftGet();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = itemMenu === 'historial' ? 6 : 3;

  const totalItems = criptos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Ordenar los datos por fecha (de más reciente a más antiguo)
  const sortedCriptos = criptos.sort((a, b) => new Date(b.fecheCreacionCripto) - new Date(a.fecheCreacionCripto));
  // Paginación: tomar los elementos correspondientes a la página actual
  const paginatedCriptos = sortedCriptos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overflow-x-auto flex flex-col items-center">
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Activo</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>ROI</th>
            <th>Detalle</th>
          </tr>
        </thead>

        {loading ? (
            <span className=" loading loading-spinner loading-xl"></span>
        ) : error ? (
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error! loader data failed successfully.</span>
          </div>
        ) : (
          <tbody>
            {paginatedCriptos.map((value) => (
              <tr key={value.transaccionId}>
                <th>
                  <div>
                    <div className="font-bold">{new Date(value.fecheCreacionCripto).toLocaleDateString('es-ES')}</div>
                    <div className="text-sm opacity-50">
                      {new Date(value.fecheCreacionCripto).toLocaleTimeString('es-ES', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })}
                    </div>
                  </div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={value.img} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{value.nombreActivo}</div>
                      <div className="text-sm opacity-50">{value.activo}</div>
                    </div>
                  </div>
                </td>
                <td className={value.tipoOperacion === 'comprar' ? 'text-error' : 'text-success'}>
                  {value.tipoOperacion === 'comprar' ? 'Compra' : 'Venta'}
                </td>
                <td>{value.cantidad}</td>
                <td>${parseFloat(value.valorTotalConComisionCompra || value.valorTotalConComisionVenta).toLocaleString()}</td>
                <td className={value.roi < 0 ? 'text-error' : 'text-success'}>
                  {value.roi !== undefined ? `${Math.floor(value.roi)}%` : ''}
                </td>
                <td className="text-sm opacity-50">
                  <Modal data={value} />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {itemMenu === 'historial' && totalPages > 1 && (
        <div className="join mt-4">
          <button onClick={handlePrev} className="join-item btn" disabled={currentPage === 1}>
            «
          </button>
          <button className="join-item btn btn-active">Page {currentPage}</button>
          <button onClick={handleNext} className="join-item btn" disabled={currentPage === totalPages}>
            »
          </button>
        </div>
      )}
    </div>
  );
};
