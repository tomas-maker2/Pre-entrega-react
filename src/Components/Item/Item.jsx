import React from 'react'
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';
import { useParams } from 'react-router-dom'



function Item() {

    let { productosId } = useParams();

    const {Data} = useContext(dataContext);

    let productosSelected = Data.find(product => product.id === productosId)


  return (
    <div>
        <h2>{productosSelected.name}</h2>
    </div>
  )
}

export default Item