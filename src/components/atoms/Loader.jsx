import React from 'react'
import Logo from '../molecules/header/Logo'

const Loader = () => {
  return (
    <div className="contenedor-loader bg-slate-50 flex justify-center">
      <div className="contenedor-loader-hijo relative">
        <div className="loader border-2 border-red-800"></div>
        <div className="borde absolute top-6 left-6">
          <Logo className="loader" />
        </div>
      </div>
    </div>
  );
}

export default Loader