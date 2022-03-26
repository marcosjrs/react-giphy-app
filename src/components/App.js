import { useState } from 'react';
import './App.css';
import AddCategoria from './Categorias/AddCategoria/AddCategoria';
import Categorias from './Categorias/Categorias';

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
      <AddCategoria add={addCategoria} />
      <input type="checkbox" onChange={debeRemplazar} checked={reemplazarMostrados} />Reemplazar los mostrados
      <Categorias categorias={categorias} />
    </div>
  );

}

export default App;
