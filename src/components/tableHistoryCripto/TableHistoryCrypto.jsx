import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { CriptoPorftGet } from '../../services/CriptoPorft';

export const TableHistoryCrypto = ({ itemMenu }) => {
  const { criptos, loading, error } = CriptoPorftGet();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = itemMenu === 'historial' ? 6 : 3;
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const totalItems = criptos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const sortedCriptos = criptos.sort((a, b) =>
    new Date(b.fechahoracompra || b.fechahoraventa) - new Date(a.fechahoracompra || a.fechahoraventa)
  );
  const paginatedCriptos = sortedCriptos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleOpenModal = (transaction) => {
    setSelectedTransaction(transaction);
    document.getElementById('my_modal_2').showModal();
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        <table className="table w-full">
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
            <tbody>
              <tr>
                <td colSpan="7" className="text-center py-6">
                  <span className="loading loading-spinner loading-lg"></span>
                </td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr>
                <td colSpan="7">
                  <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! loader data failed successfully.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {paginatedCriptos.map((value) => (
                <tr key={value.transaccionid}>
                  <th>
                    <div>
                      <div className="font-bold">
                        {new Date(value.fechahoracompra || value.fechahoraventa).toLocaleDateString('es-ES')}
                      </div>
                      <div className="text-sm opacity-50">
                        {new Date(value.fechahoracompra || value.fechahoraventa).toLocaleTimeString('es-ES', {
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
                        <div className="font-bold">{value.nombreactivo}</div>
                        <div className="text-sm opacity-50">{value.activo}</div>
                      </div>
                    </div>
                  </td>
                  <td className={value.tipooperacion === 'comprar' ? 'text-error' : 'text-success'}>
                    {value.tipooperacion === 'comprar' ? 'Compra' : 'Venta'}
                  </td>
                  <td>{value.cantidad}</td>
                  <td>${parseFloat(value.valortotalconcomisioncompra || value.valortotalconcomisionventa).toLocaleString()}</td>
                  <td className={value.roi < 0 ? 'text-error' : 'text-success'}>
                    {value.roi !== undefined ? `${Math.floor(value.roi)}%` : ''}
                  </td>
                  <td>
                    <button onClick={() => handleOpenModal(value)} className="btn btn-sm btn-outline">
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {itemMenu === 'historial' && totalPages > 1 && (
          <div className="join mt-4 flex justify-center">
            <button onClick={handlePrev} className="join-item btn" disabled={currentPage === 1}>
              «
            </button>
            <button className="join-item btn btn-active">Página {currentPage}</button>
            <button onClick={handleNext} className="join-item btn" disabled={currentPage === totalPages}>
              »
            </button>
          </div>
        )}
      </div>

      {selectedTransaction && <Modal data={selectedTransaction} />}
    </div>
  );
};
