import React from 'react'
import  {Modal}  from '../ui/Modal'

// pedir un limite de 3 en el dashboard
// en el historial mosrar normal limite de 10 por paginacion
// metodo LIFO

export const TableHistoryCrypto = () => {
  return (<>

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
    <tbody>

      <tr>
        <th>
            <div >
                <div className="font-bold">2/5/2025</div>
                <div className="text-sm opacity-50">7:30 AM</div>
            </div>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">BitCoin</div>
              <div className="text-sm opacity-50">BTC</div>
            </div>
          </div>
        </td>
        <td className='text-error'>Compra</td>
        <td>2.5</td>
        <td>$ 2.5000</td>
        <td className='text-error'>-15</td>
        <td className="text-sm opacity-50">
          {/* enviar datos */}
          {<Modal data={['Bitcoin','Compra','2.5 BTC',1.850,'01/02/2025 14:35','0XABC1234..FREE',12,4.5,'TXN-01231afdfasd']}/>}
        </td>
      </tr>


    </tbody>
  </table>
  <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn btn-active">Page 22</button>
        <button className="join-item btn">»</button>
    </div>
</div>
  
  
  </>)
}
