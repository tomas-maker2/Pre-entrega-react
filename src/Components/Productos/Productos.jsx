import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
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
                        {task.name}
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
}

export default Productos
