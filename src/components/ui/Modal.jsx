export const Modal = ({data}) => {
 
  console.log(data)
  
return (<>

  <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Mas</button>
  
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box">

      <h3 className="font-bold text-lg">Detalle de la Transacción</h3>

      <div className="grid grid-cols-2 grid-rows-9 gap-3 m-3 p-3">
        <div ><label className="label">Activo</label></div>
        <div className="col-start-1 row-start-2">  <label className="label"> Tipo de Operación  </label>  </div>
        <div className="col-start-1 row-start-3">  <label className="label"> Cantidad  </label>  </div>
        <div className="col-start-1 row-start-4">  <label className="label"> Valor Total por comision  </label>  </div>
        <div className="col-start-1 row-start-5">  <label className="label"> Fecha y Hora  </label>  </div>
        <div className="col-start-1 row-start-6">  <label className="label"> Valor Actual de la cripto  </label>  </div>
        <div className="col-start-1 row-start-7">  <label className="label"> Confirmaciones  </label>  </div>
        <div className="col-start-1 row-start-8">  <label className="label"> ROI actual  </label>  </div>
        <div className="col-start-1 row-start-9">  <label className="label"> ID de transacción  </label>  </div>
              {/* data */}

        <div className="col-start-2 row-start-1 font-bold"> 
          <div className="flex gap-0.5">
            <img src={data.img} alt="ll" width={20} height={20} /> {data.nombreactivo}
          </div>
        </div>
        <div className="col-start-2 row-start-2 font-bold">{data.tipooperacion}</div>
        <div className="col-start-2 row-start-3 font-bold">{data.cantidad}</div>
        <div className="col-start-2 row-start-4 font-bold">$ {parseFloat(data.valortotalconcomisioncompra || data.valortotalconcomisionventa).toLocaleString()}</div>
        <div className="col-start-2 row-start-5 font-bold">{new Date(data.fechahoracompra || data.fechahoraventa).toLocaleDateString('es-ES')}</div>
        <div className="col-start-2 row-start-6 font-bold">$ {parseFloat(data.valoractualcripto).toLocaleString()}</div>
        <div className="col-start-2 row-start-7 font-bold">{data.nombreactivo}</div>
        <div className="col-start-2 row-start-8 font-bold">
          { data.roi < 0 ? <label className="text-error">{data.roi}%</label> : <label className="text-success">+{data.roi}%</label>}
        </div>
        <div className="col-start-2 row-start-9 font-bold">{data.transaccionid}</div>
      </div>
      
      <div className="flex justify-end">
          <button className="btn  ">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width={15} 
              height={15} 
              viewBox="0 0 15 15">
              <path fill="currentColor" d="M2.5 6.5V6H2v.5zm4 0V6H6v.5zm0 4H6v.5h.5zm7-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM6 6.5v4h1v-4zm.5 4.5h1v-1h-1zM9 9.5v-2H8v2zM7.5 6h-1v1h1zM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM10 6v5h1V6zm.5 1H13V6h-2.5zm0 2H12V8h-1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z"></path>
            </svg>
            Exportar PDF
          </button>
      </div>
      
    </div>

    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>

  </dialog>
  
</>)}