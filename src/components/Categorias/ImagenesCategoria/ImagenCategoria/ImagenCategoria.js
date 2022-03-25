import React from 'react'

const ImagenCategoria = ({img:{url, title}}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
        <img src={url } alt={ title } />
        <p> { title } </p>
    </div>
  )
}

export default ImagenCategoria