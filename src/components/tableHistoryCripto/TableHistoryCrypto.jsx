import React from 'react'

// pedir un limite de 3 en el dashboard
// en el historial mosrar normal limite de 10 por paginacion
// metodo LIFO


export const TableHistoryCrypto = () => {
  return (
<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Activo</th>
        <th>Tipo</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>ROI</th>
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
      </tr>

      <tr>
        <th>
            <div >
                <div className="font-bold">2/5/2025</div>
                <div className="text-sm opacity-50">1:30 PM</div>
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
        <td className='text-success'>Venta</td>
        <td>2.5</td>
        <td>$ 2.5000</td>
        <td className='text-success'>+15</td>
      </tr>

      <tr>
        <th>
            <div >
                <div className="font-bold">2/5/2025</div>
                <div className="text-sm opacity-50">1:30 PM</div>
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
        <td className='text-success'>Venta</td>
        <td>2.5</td>
        <td>$ 2.5000</td>
        <td className='text-success'>+15</td>
      </tr>

    </tbody>
  </table>
</div>
  )
}
