import React from 'react';

function Listado({ colaboradores }) {
  return (
    <table className="table">
      <thead>
        <tr>
        <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((tarea) => (
          <tr key={tarea.id}>
            <td>{tarea.id}</td>
            <td>{tarea.nombre}</td>
            <td>{tarea.correo}</td>
            <td>{tarea.edad}</td>
            <td>{tarea.cargo}</td>
            <td>{tarea.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Listado;