import React from 'react'
import PropTypes from 'prop-types'
import Categoria from './Categoria/Categoria'

const Categorias = ({categorias}) => {
  return (
    <ul>
        {categorias.map(c => <Categoria key={c} categoria={c} />)}
    </ul>
  )
}

Categorias.propTypes = {
  categorias: PropTypes.array.isRequired
}

export default Categorias