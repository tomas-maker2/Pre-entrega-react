import TotalItems from "../CartContent/TotalItems"

import { useContext } from 'react'
import {dataContext} from '../Context/DataContext';


const CartWidget = () => {

    const {cart} = useContext(dataContext);

    return (
        <div className='cart__shop'>
            <h1>🛒</h1>
            {cart.length > 0 ?  <TotalItems/> : null }
        </div>
    )
}

export default CartWidget