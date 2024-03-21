import React, { useState } from 'react';

const Buscador = ({ setFiltro }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
    setFiltro(event.target.value);
  };

  return (
    <div className='buscador'>
       <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar"
        value={busqueda}
        onChange={handleChange}
      />
    </div>

    </div>
   
  );
};

export default Buscador;