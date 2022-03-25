import { useState } from 'react';
import './App.css';
import AddCategoria from './Categorias/AddCategoria/AddCategoria';
import Categorias from './Categorias/Categorias';

function App() {

  const initialData = ['Goku'];
  const [categorias, setCategorias] = useState(initialData);

  const addCategoria = (categoria) => {
    setCategorias([...categorias, categoria]);
  };

  return (
    <div className="App">
      <AddCategoria add={addCategoria} />
      <Categorias categorias={categorias} />
    </div>
  );

}

export default App;
