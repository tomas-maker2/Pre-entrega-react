import React from 'react';
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

export default function Ferrari() {

    const {data} = useContext(dataContext);

    

    let ferrariCategory = data.find(product => product.category === String("ferrari"))

  return (
    <div className='carta'>
      <div className='carta-img'>
        <img src={ferrariCategory.img} alt={ferrariCategory.name} />
      </div>
      <div className="carta-info">
        <h3>{ferrariCategory.name}</h3>
        <h2>{ferrariCategory.category}</h2>
        <p>{ferrariCategory.price}$</p>
      </div>
    </div>
  )
}
