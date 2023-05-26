import React from 'react';
import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

function Masseraiti() {

    const {data} = useContext(dataContext);

    let masseratiCategory = data.find(product => product.category === "masserati")
    
  return (
    <div className='carta'>
      <div className='carta-img'>
        <img src={masseratiCategory.img} alt={masseratiCategory.name} />
      </div>
      <div className="carta-info">
        <h3>{masseratiCategory.name}</h3>
        <h2>{masseratiCategory.category}</h2>
        <p>{masseratiCategory.price}$</p>
      </div>
    </div>
  )
}

export default Masseraiti