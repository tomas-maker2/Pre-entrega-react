import React from 'react'

import "./Banner.css"
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-container'>
            <Link to={"/tienda"} className='btn-tienda'>Tienda</Link>
            <p>El mejor lugar para comprar un Auto</p>
        </div>
    </div>
  )
}

export default Banner