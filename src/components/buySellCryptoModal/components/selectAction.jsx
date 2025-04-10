
export const SelectActions = ({typeAction}) => {


    const handleChange = (e) =>{
        const selectedValue = e.target.value;
        typeAction({selectedValue})
    }
    
  return (
    <div>
        <label className='label'>Accion</label>
        <select 
            name='selectedAction'  
            className="select select-md w-64"
            onChange={handleChange}
            >
            <option  disabled selected></option>
            <option value="comprar">Comprar</option>
            <option value="vender">Vender</option>
        </select>



    </div>
  )
}

export default SelectActions