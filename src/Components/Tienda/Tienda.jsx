import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

import './tienda.css'

function Tienda() {
  const [tasks, setTasks] = useState();
  const [msg] = useState('Cargando...');
  const { buyProducts } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const db = getFirestore();
      const tasksCollection = collection(db, 'tasks');
      let tasksQuery = query(tasksCollection);

      if (selectedCategory && selectedCategory !== 'Todos') {
        tasksQuery = query(tasksCollection, where('category', '==', selectedCategory));
      }

      const querySnapshot = await getDocs(tasksQuery);
      const tasksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksData);
    };

    fetchTasks();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (!tasks) return <p>{msg}</p>;

  const categories = ['Todos', 'ferrari', 'lambo', 'masserati'];

  return (
    <>
      <div className='botones__categorias'>
        {categories.map((category) => (
          <button className='boton__categoria' key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
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
}

export default Tienda;





// import React, { useEffect, useState } from 'react';

// import './tienda.css'

// import { getFirestore, collection, getDocs} from 'firebase/firestore'
// import { Link } from 'react-router-dom';

// import { useContext } from "react";
// import {dataContext} from '../Context/DataContext';

// function Tienda() {

//   const [tasks, setTasks] = useState();
//   const [msg] = useState("Cargando...");

//   const {buyProducts} = useContext(dataContext);

//   useEffect(() => {
//     const db = getFirestore()
//     const collectionRef = collection(db, "tasks");
//     getDocs(collectionRef).then((querySnapshot) => {
//       const tasksCollection = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
//       setTasks(tasksCollection);
//     })
//   },[])

//     if(!tasks) return <p>{msg}</p>

//   return (
//     <>
//     <div className='product-card-container'>
//     <div className='cartas'>
//     {tasks.map((task) => (
//       <div class="card" key={task.name}>
//       <img src={task.img} alt={task.name} />
//         <div class="card-body">
//           <p className='id'>{task.id}</p>
//           <h5 class="card-title">
//             <Link className='title_style' to={`/tienda/${task.id}`}>{task.name}</Link>
//           </h5>
//           <button onClick={()=> buyProducts(task)}>Comprar</button>
//           <p class="card-text">{task.price}$</p>
//         </div>
//     </div>
//     ))}
//     </div>
//     </div>
//     </>
//   )
// }

// export default Tienda