import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../Loading/Loading'
import ImagenesCategoria from '../ImagenesCategoria/ImagenesCategoria'
import { getGifs } from '../../../services/gifs.service'

const Categoria = ({categoria}) => {

  const [imagenes, setImages] = useState([]);

  //Para que no esté llamando continuamente (que es lo que pasa si pones solo la llamada a getImages()), con [] como segundo parametro hace que solo se ejecute una vez al renderizar el componente.
  useEffect(() => {
    getGifs( categoria ).then( setImages )
  },[]);  
  

  return (
    <>
        <h3 key={categoria} className="animate__animated animate__fadeIn"> { categoria } </h3>
        <Loading loading={(!imagenes)} />
        <ImagenesCategoria imagenes={ imagenes } />
    </>
  )
}

Categoria.propTypes = {
  categoria: PropTypes.string.isRequired
}

//Para que no renderice nuevo al cambiar uno de los otros hijos en el padre (es decir al añadir una nueva categoria en el listado)
export default React.memo( Categoria);