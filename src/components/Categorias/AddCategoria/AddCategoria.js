import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategoria = ({ add }) => {

  const [categoria, setCategoria] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(categoria.trim().length <= 2) return;
    add(categoria);
    setCategoria('');
  }

  const handleChangeInput = (e) => {    
     setCategoria(e.currentTarget.value);
  };  


  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" onChange={handleChangeInput} placeholder="Añade una Categoría" value={categoria} />
    </form>
  )
  
}

AddCategoria.propTypes = {
  add: PropTypes.func.isRequired
}

export default AddCategoria