import React, { useEffect, useState } from "react";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";

import { useContext } from "react";
import {dataContext} from '../Context/DataContext';

import './detalles.css'

const Detalles = () => {
  const { id } = useParams();

  const [task, setTask] = useState();
  const [msg, setMsg] = useState("Cargando...");

  const {buyProducts} = useContext(dataContext);

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "tasks", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setTask({id:"", ...doc.data()});
      } else {
        setMsg("No hay datos");
      }
    });
  }, []);

  if (!task) return <p>{msg}</p>;

  return (
  <>
      <div class="card">
          <img src={task.img} alt={task.name} />
              <div class="card-body">
                  <h5 class="card-title">{task.name}</h5>
                  <button onClick={()=> buyProducts(task)}>Comprar</button>
                  <p class="card-text">{task.price}$</p>
                  <Link className="volver" to={'/tienda'}>Volver</Link>
              </div>
      </div>
  </>
  )
};

export default Detalles;
