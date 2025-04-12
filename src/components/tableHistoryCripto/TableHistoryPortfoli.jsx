import React from 'react'

export const TableHistoryPortfoli = () => {
    const data = 10
  return (<>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <thead>
      <tr>
        <th></th>
        <th>Activo</th>
        <th>Cantidad</th>
        <th>Valor Actual</th>
        <th>Total USD</th>
      </tr>
    </thead>

    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
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
        <td>2.5</td>
        <td>$ 23.000</td>
        <td>
        { data < 0 ? <label className="text-error">{data}%</label> : <label className="text-success">+{data}%</label>}
        </td>
      </tr>
     
    </tbody>
  </table>
</div>

    </>)
}
