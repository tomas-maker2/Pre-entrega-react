import React from 'react'
import Banner from '../Banner/Banner'
import Productos from '../Productos/Productos'

import "../Productos/Productos.css"

function Inicio() {
  return (
    <div>
        <Banner/>
        <div className='filtro'>
          <input type="radio" value='red' name='red'   />
          <label htmlFor="red">Red</label>
          <input type="radio" value='grey' name='grey'   />
          <label htmlFor="grey">Grey</label>
          <input type="radio" value='blue' name='blue'   />
          <label htmlFor="blue">Blue</label>
        </div>
        <div className='product-card-container'>
        <Productos/>
        </div>
    </div>
  )
}

export default Inicio