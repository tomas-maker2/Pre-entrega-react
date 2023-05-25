import React from 'react';
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';
import { Link, useParams } from 'react-router-dom';

import './categoria.css'

function ProductDetailsCategory() {

    let { categoria } = useParams();

    const {data} = useContext(dataContext);

    let productosSelectedCategory = data.find(product => product.category === categoria)

  return (
    <div className='carta'>
      <div className='carta-img'>
        <img src={productosSelectedCategory.img} alt={productosSelectedCategory.name} />
      </div>
      <div className="carta-info">
        <h3>{productosSelectedCategory.name}</h3>
        <h2>{productosSelectedCategory.category}</h2>
        <p>{productosSelectedCategory.price}$</p>
        <Link to={`/`}><button>Volver</button></Link>
      </div>
    </div>
  )
}

export default ProductDetailsCategory