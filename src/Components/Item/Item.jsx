import React from 'react'
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';
import { Link, useParams } from 'react-router-dom'

import './Item.css'


function Item() {

    let { productosId } = useParams();

    const {data} = useContext(dataContext);

    let productosSelected = data.find(product => product.id === Number(productosId))


  return (
    <div className='carta'>
      <div className='carta-img'>
        <img src={productosSelected.img} alt={productosSelected.name} />
      </div>
      <div className="carta-info">
        <h2>{productosSelected.name}</h2>
        <p>{productosSelected.price}$</p>
        <Link to={`/`}><button>Volver</button></Link>
      </div>
    </div>
  )
}

export default Item