import React from 'react'
import Banner from '../Banner/Banner'
import Productos from '../Productos/Productos'

import "../Productos/Productos.css"

function Inicio() {
  return (
    <div>
        <Banner/>
        <div className='product-card-container'>
        <Productos/>
        </div>
    </div>
  )
}

export default Inicio