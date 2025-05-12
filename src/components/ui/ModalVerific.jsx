
import React from 'react'
import { buyCryptos } from '../buySellCryptoModal/logic/buyCriptos';
import { saleCriptos } from '../buySellCryptoModal/logic/saleCriptos';

export const ModalVerific = ({formData,typeAction,typeCripto,quantity,formDataCurrency}) => {

  const handleConfirm =  () => {
    
    if (typeAction && typeCripto && quantity) {
      
      if(typeAction === 'comprar'){
        buyCryptos(formData,typeAction,typeCripto,quantity,formDataCurrency)
      }

      if(typeAction === 'vender'){
        saleCriptos(formData,typeAction,typeCripto,quantity,formDataCurrency)
      }
    
    } else {
      alert('Selecciona un activo y tipo de operación');
    }
  };


return (<>

        <button className="btn btn-warning self-center" onClick={()=>document.getElementById('my_modal_1').showModal()}>Confirmar Operacion</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <p className="py-4">Estas seguro seguir con este proceso?</p>
            <p className="py-4">Al confirmar el proceso los cambios se guardaran</p>
            <div className="modal-action">
            <form method="dialog">
                <div className="flex gap-2">
                    <button className="btn btn-error self-center" >Cancelar</button>
                    <button className="btn btn-warning self-center" onClick={handleConfirm}>Confirmar</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>


  </>)
}      



