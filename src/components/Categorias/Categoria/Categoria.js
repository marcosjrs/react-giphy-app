import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../../Loading/Loading'
import ImagenesCategoria from '../ImagenesCategoria/ImagenesCategoria'
import { useGifs } from '../../../services/hooks/useGifs'

const Categoria = ({categoria}) => {

  const imagenes = useGifs(categoria); 

  return (
    <>
        <h3 key={categoria} className="animate__animated animate__fadeIn"> { categoria } </h3>
        <Loading loading={(imagenes.loading)} />
        <ImagenesCategoria imagenes={ imagenes.data } />
    </>
  )
}

Categoria.propTypes = {
  categoria: PropTypes.string.isRequired
}

//Para que no renderice nuevo al cambiar uno de los otros hijos en el padre (es decir al añadir una nueva categoria en el listado)
export default React.memo( Categoria);