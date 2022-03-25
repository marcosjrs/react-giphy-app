import React from 'react'
import ImagenCategoria from './ImagenCategoria/ImagenCategoria'

const ImagenesCategoria = ({imagenes}) => {
  return  (imagenes && imagenes.length > 0) ? 
  (
    <div className="card-grid">            
    {
        imagenes.map( img => (
          <ImagenCategoria key={img.id} img={img} />
        ))
    }        
    </div>
  ): 'No hay imágenes o todavía se están cargando...'
}

export default ImagenesCategoria