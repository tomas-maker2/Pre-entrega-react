import React, { useState, useEffect } from 'react';

import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

function Ferrari() {

    const [products, setProducts] = useState();

    useEffect(() => {
        const db = getFirestore();
        const q = query(
            collection(db, "tasks"),
            where("category", "==", "ferrari")
        );
        getDocs(q).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("No results");
            }
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        }) 
        
    },[])

    console.log(products)
    
    return (
        <div>
            {
                products.map((prod) => {
                    <h2>{prod.name}</h2>
                })
            }
        </div>
    )
}

export default Ferrari