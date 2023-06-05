import React, { useEffect, useState } from 'react';

import './tienda.css'

import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { Link } from 'react-router-dom';

import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

function Tienda() {

  const [tasks, setTasks] = useState();
  const [msg] = useState("Cargando...");

  const {buyProducts} = useContext(dataContext);

  useEffect(() => {
    const db = getFirestore()
    const collectionRef = collection(db, "tasks");
    getDocs(collectionRef).then((querySnapshot) => {
      const tasksCollection = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      setTasks(tasksCollection);
    })
  },[])

    if(!tasks) return <p>{msg}</p>

  return (
    <>
    <div className='cartas'>
    {tasks.map((task) => (
      <div class="card" key={task.name}>
      <img src={task.img} alt={task.name} />
        <div class="card-body">
          <p>{task.id}</p>
          <h5 class="card-title">
            <Link to={`/tienda/${task.id}`}>{task.name}</Link>
          </h5>
          <button onClick={()=> buyProducts(task)}>Comprar</button>
          <p class="card-text">{task.price}</p>
        </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Tienda