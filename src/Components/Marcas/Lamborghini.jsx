import React from 'react';
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

function Lamborghini() {

    const {data} = useContext(dataContext);

    let lamboCategory = data.find(product => product.category === "lamborghini" )

  return (
    <div className='carta'>
      <div className='carta-img'>
        <img src={lamboCategory.img} alt={lamboCategory.name} />
      </div>
      <div className="carta-info">
        <h3>{lamboCategory.name}</h3>
        <h2>{lamboCategory.category}</h2>
        <p>{lamboCategory.price}$</p>
      </div>
    </div>
  )
}

export default Lamborghini