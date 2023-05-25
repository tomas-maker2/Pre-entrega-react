import React from 'react'
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';
import { useParams } from 'react-router-dom'

function Marcas() {

    let { category } = useParams();

    const {data} = useContext(dataContext);

    let categoryFiltrado = data.find(product => product.category === category)

  return (
    <div>
        <h2>{categoryFiltrado.name}</h2>
    </div>
  )
}

export default Marcas