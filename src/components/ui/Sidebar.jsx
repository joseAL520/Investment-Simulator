import React from 'react'
import { Link } from 'react-router-dom'


export const Sidebar = () => {
  return (
    <div className='w-60 h-screen  bg-base-200  flex flex-col  gap-10'>

       <div className="text-center p-4 ">
        <strong className='text-2xl'>SmartInvest</strong>
        <br />
        <span className='text-xs text-gray-500'>@SmartInvest</span>   
       </div>

       <div className="">
        <ul className="menu  rounded-box w-56">             
            <li className='p-3.5'>
                    <Link to='/'> 
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" height="24" 
                          viewBox="0 0 24 24">
                              <path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/>
                      </svg>
                    Dashboard
                    </Link>
            </li>

            <li className='p-3.5'>
                    <Link to='/history'>
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24">
                              <path fill="currentColor" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"/>
                          </svg>
                      Historial
                    </Link>
            </li>

            <li className='p-3.5'>
                    <Link to='/portfoli'>
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" height="24" viewBox="0 0 32 32">
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4zm14 14v-4m4-10s0-4-4-4s-4 4-4 4"/>
                      </svg>
                    Portafolio
                    </Link>
            </li>
        </ul>
       </div>

    </div>
  )
}
