// import { useContext } from "react";
// import {dataContext} from '../Context/DataContext';
// import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

import "./Productos.css"


function Productos() {

    const [tasks, setTasks] = useState();
    const [msg] = useState('Cargando...');
    const { buyProducts } = useContext(dataContext);

    useEffect(() => {
        const fetchTasks = async () => {
          const db = getFirestore();
          const tasksCollection = collection(db, 'tasks');
          let tasksQuery = query(tasksCollection);
          const querySnapshot = await getDocs(tasksQuery);
          const tasksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setTasks(tasksData);
        };
    
        fetchTasks();
      }, []);
    
    
      if (!tasks) return <p>{msg}</p>;
    
    return (
        <>
          <div className='product-card-container'>
            <div className='cartas'>
              {tasks.map((task) => (
                <div class='card' key={task.name}>
                  <img src={task.img} alt={task.name} />
                  <div class='card-body'>
                    <p className='id'>{task.id}</p>
                    <h5 class='card-title'>
                      <Link className='title_style' to={`/tienda/${task.id}`}>
                        {task.name}
                      </Link>
                    </h5>
                    <button onClick={() => buyProducts(task)}>Comprar</button>
                    <p class='card-text'>{task.price}$</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );

    // return data.map((product) => {
    //     return (
    //         <div className="card" key={product.id}>
    //             <img src={product.img} alt="img-card"/>
    //             <h3>{product.name}</h3>
    //             <h4>{product.price}$</h4>
    //             <button onClick={()=> buyProducts(product)}>Comprar</button>
    //             <Link className="link" to={`/productos/${product.id}`}>Ver más</Link>
    //         </div>
    //     )
    // })
}

export default Productos
