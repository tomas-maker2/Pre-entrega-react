import React, { useEffect, useState } from 'react';


import { getFirestore, doc, getDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom';


const detalles = () => {

    const {id} = useParams();

    const [task, setTask] = useState();
    const [msg, setmsg] = useState("Cargando...");

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "tasks" , id)
        getDoc(docRef).then((doc) => {
            if(doc.exists()){
                setTask({id:"", ...doc.data()})
            }else {
                setmsg("No hay datos")
            }
        })
    }, []);

    if(!task) return <p>{msg}</p>

    return (
    <>
        <div class="card">
            <img src={task.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{task.name}</h5>
                    <p class="card-text">{task.price}</p>
                </div>
        </div>
    </>
    )
}

export default detalles