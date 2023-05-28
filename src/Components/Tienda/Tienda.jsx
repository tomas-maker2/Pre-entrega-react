import React from 'react'

import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

function Tienda() {

  const {data, setData} = useContext(dataContext);

  const filterResult = (catItem) => {
    const result = data.filter((curData) => {
      return curData.category === catItem
    });
    setData(result)
  }

  return (
    <>
      <h1 className='text-center text-dark mt-4 '>A Comprar</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4 text-uppercase fs-3" onClick={() => setData(data)}>Todos los productos</button>
            <button className="btn btn-warning w-100 mb-4 text-uppercase fs-3" onClick={() => filterResult('ferrari')}>Ferrari</button>
            <button className="btn btn-warning w-100 mb-4 text-uppercase fs-3" onClick={() => filterResult('lamborghini')}>Lamborghini</button>
            <button className="btn btn-warning w-100 text-uppercase fs-3"  onClick={() => filterResult('masserati')}>Masserati</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {
                data.map((values) => {
                  return (
                    <>
                      <div className="col-md-4" key={values.id}>
                      <div class="card">
                      <img className='card-img-top' src={values.img} alt={values.name} />
                      <div class="card-body">
                      <h5 class="card-title">{values.name}</h5>
                      <p class="card-text">{values.price}$</p>
                      </div>
                      </div>
                      </div>
                    </>
                  )
                })
              }
              

            
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tienda