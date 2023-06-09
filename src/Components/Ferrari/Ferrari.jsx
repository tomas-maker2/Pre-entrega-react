import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

import './ferrari.css'
import { Link } from 'react-router-dom';

import {AiFillShop} from 'react-icons/ai'

function Ferrari () {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const {buyProducts} = useContext(dataContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, 'tasks');
        const filteredCollectionRef = query(collectionRef, where('category', '==', 'ferrari'));

        const querySnapshot = await getDocs(filteredCollectionRef);
        const tasksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setTasks(tasksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Link to={"/tienda"}>
      <button className='volver'><AiFillShop className='icono'/>Ir a la Tienda</button>
    </Link>
    <div className='product-card-container'>
      {tasks.map((task) => (
            <div class="card" key={task.name}>
            <img src={task.img} alt={task.name} />
            <div class="card-body">
            <Link className='card-title' to={`/tienda/${task.id}`}>{task.name}</Link>
              <p class="card-text">{task.price}$</p>
              <button onClick={()=> buyProducts(task)}>Comprar</button>
            </div>
          </div>
      ))}
    </div>
    </>
  );
}

export default Ferrari;