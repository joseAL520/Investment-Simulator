import React, { useEffect, useState } from 'react'
import { API_URL_PRV, SUPABASE_KEY_PRV } from '../environment/dev_env'

const API_URL = API_URL_PRV
const SUPABASE_KEY = SUPABASE_KEY_PRV
const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
}

export const CriptoPorftGet = () => {
  
  const [criptos, setCriptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    const fetchCripto = async() => {
      try{
        const response = await fetch(`${API_URL}?select=*`,{
          method: 'GET',
          headers
        });
  
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
  
        const data = await response.json();
        setCriptos(data);
  
      }catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    
    }
    fetchCripto()
  },[])

  return {criptos,loading,error}
}

export const CriptoPorftPost =  async (nuevaCripto) => {
  
  // const handleSubmit = async () => {
  //   const nuevaCripto =  {
  //     "transaccionId": "tx-6745329681341",
  //     "activo": "BTC",
  //     "tipoOperacion": "comprar",
  //     "cantidad": "211",
  //     "valorTotal": "78405222.51",
  //     "fechaHora": "2025-04-22T13:48:01.349Z",
  //     "roi": "-1.0",
  //     "valorTotalConComision": "77459.7499"
  // };
  
  //   const enviar = CriptoPorftPost(nuevaCripto);
  //   const { data, error } = await enviar();
  
  //   if (error) {
  //     console.error('❌ Error al crear cripto:', error);
  //   } else {
  //     console.log('✅ Cripto creada:', data[0]);
  //   }
  // };

    try{
      const response = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(nuevaCripto)
      });

      if (!response.ok) {
        throw new Error('Error al Enviar los datos');
      }
      const data = await response.json();
      return { data, error: null };

    } catch (error) {
      return { data: null, error: error.message };
    }

}

export const CriptoPorftPatch = async (idCripto,updateCripto) => {
  
  // const handleSubmit =  async()  => {
  //   const fetch  = await CriptoPorftPatch('tx-6745329681341',  {"cantidad": "10"});
  //   console.log(fetch)
  // };
  
  try{
      const response = await fetch(`${API_URL}?transaccionId=eq.${idCripto}`,{
        method: 'PATCH',
        headers,
        body: JSON.stringify(updateCripto)
      });

    if (!response.ok) {
      throw new Error('Error al Editar los datos');
    }
    const data = await response.json();
    return { data, error: null };

  } catch (error) {
    return { data: null, error: error.message };
  }
}

export const eliminarCripto = async (idCripto) => {

  
  // const handleSubmit =  async()  => {
  //   const fetch  = await eliminarCripto('tx-6745329681341');
  //   console.log(fetch)
  // };

  try {
    const response = await fetch(`${API_URL}?transaccionId=eq.${idCripto}`, {
      method: 'DELETE',
      headers
    });
    if (!response.ok) throw new Error('Error al eliminar cripto');
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
