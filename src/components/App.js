import { useState } from 'react';
import './App.css';
import AddCategoria from './Categorias/AddCategoria/AddCategoria';
import Categorias from './Categorias/Categorias';
import Checkbox from './Checkbox/Checkbox';

function App() {

  const initialData = ['Goku'];
  const [categorias, setCategorias] = useState(initialData);
  const [reemplazarMostrados, setReemplazarMostrados] = useState(true);

  const addCategoria = (categoria) => {
    const ctgorias = reemplazarMostrados ? [categoria] : [...categorias, categoria];
    setCategorias(ctgorias);
  };

  const debeRemplazar = (e) => {
    setReemplazarMostrados(e.target.checked);
  }

  return (
    <div className="App">
      <div className='contenedor-form'>
        <AddCategoria add={addCategoria} texto='Categoría a Buscar' />      
        <Checkbox handleChange={debeRemplazar} checkedBox={reemplazarMostrados} texto="Reemplazar los mostrados" />
      </div>
      <Categorias categorias={categorias} />
      
    </div>
  );

}

export default App;
