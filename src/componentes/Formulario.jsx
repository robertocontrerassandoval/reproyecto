import React, { useState } from 'react';

function Formulario({ agregarColaborador, mostrarAlerta }) {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(nuevoColaborador).some(field => field.trim() === '')) {
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }

    agregarColaborador(nuevoColaborador);
    mostrarAlerta('Colaborador agregado exitosamente');
   
    setNuevoColaborador({
      id: (''), nombre: (''), correo: (''), edad: (''),cargo: (''),telefono: (''),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="id"
        value={nuevoColaborador.id}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={nuevoColaborador.nombre}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={nuevoColaborador.correo}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="text"
        name="edad"
        placeholder="Edad"
        value={nuevoColaborador.edad}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={nuevoColaborador.cargo}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={nuevoColaborador.telefono}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Agregar Colaborador
      </button>
    </form>
  );
}

export default Formulario;