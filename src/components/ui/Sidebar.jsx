import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative">
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`w-60 bg-base-200 flex flex-col gap-10 p-2 fixed top-0 left-0 h-screen z-50 transition-transform duration-300 md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex`}>

        <div className="text-center p-4 flex flex-col items-center justify-centerrounded-xl">
          <img
            className="w-10 h-10 rounded-3xl mix-blend-multiply"
            src="imgs/logo.png"
            alt="logo"
          />
          <strong className="text-2xl text-white mt-2">SmartInvest</strong>
          <span className="text-xs text-blue-100">@SmartInvest</span>
        </div>

        <ul className="menu rounded-box w-full">
          <li className='p-3.5'>
            <Link to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
              </svg>
              Dashboard
            </Link>
          </li>

          <li className='p-3.5'>
            <Link to='/history'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z" />
              </svg>
              Historial
            </Link>
          </li>

          <li className='p-3.5'>
            <Link to='/portfoli'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2"
                  d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4zm14 14v-4m4-10s0-4-4-4s-4 4-4 4" />
              </svg>
              Portafolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
