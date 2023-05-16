import {dataContext} from '../Context/DataContext';
import { useContext } from 'react'


function CartTotal() {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)

  return (
    <div className='cartTotal'>
        <h3>Total a pagar: {total}$</h3>
    </div>
  )
}

export default CartTotal