import { useContext } from "react";
import {dataContext} from '../Context/DataContext';
import { Link } from "react-router-dom";

import "./Productos.css"


function Productos() {

    const {data, buyProducts} = useContext(dataContext);

  




    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-card"/>
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <button onClick={()=> buyProducts(product)}>Comprar</button>
                <Link className="link" to={`/productos/${product.id}`}>Ver más</Link>
                <Link className="link" to={`/products/${product.category}`}>Marcas</Link>
            </div>
        )
    })
}

export default Productos
