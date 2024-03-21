import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './componentes/Alert';
import Buscador from './componentes/Buscador';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import { BaseColaboradores } from './BaseColaboradores';


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: ''});
  const [filtrar, setFiltrar] = useState('');

  const agregarColaborador = nuevoColaborador => {
    setColaboradores(prevColaboradores => [...prevColaboradores, nuevoColaborador]); 
    setAlerta({ mensaje: 'Colaborador agregado con éxito' });
  };

  const mostrarAlerta = (mensaje) => {
    setAlerta({ mensaje});
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador => {
    return (
      colaborador.id.toLowerCase().includes(filtrar.toLowerCase()) ||
      colaborador.nombre.toLowerCase().includes(filtrar.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(filtrar.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(filtrar.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(filtrar.toLowerCase()) ||
      colaborador.telefono.includes(filtrar)
    );
  });

  return (
    <div className='general'>

        <div className="container mt-5">

         <Buscador setFiltro={setFiltrar} /> 
             <div className="listado">

                <div className="col-lg-8">
                  <Listado colaboradores={colaboradoresFiltrados} />
                </div>

                <div className="col-lg-4">
                  <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
                </div>

             </div>

            {alerta.mensaje && <Alert mensaje={alerta.mensaje} />}

         </div>

    </div>
  
  );
}

export default App;
