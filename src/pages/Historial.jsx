import React from 'react'
import { TableHistoryCrypto } from '../components/tableHistoryCripto/TableHistoryCrypto'

export const Historial = () => {
  return (<>
    <section className='bg-base-200 m-5 p-2 rounded-md'> 
      <TableHistoryCrypto itemMenu={'historial'}></TableHistoryCrypto>
    </section>
  </>
  )
}
