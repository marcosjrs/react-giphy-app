import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({handleChange,checkedBox, texto=''}) => {
  return (
    <>
    <input type="checkbox" onChange={handleChange} checked={checkedBox} />{texto}
    </>
  )
}

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checkedBox: PropTypes.bool.isRequired
}

export default Checkbox