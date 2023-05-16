
import CartElements from './CartElements'
import CartTotal from './CartTotal'

import './CartContent.css'

import React, { useContext } from 'react'
import {dataContext} from '../Context/DataContext';

function CartContent() {

  const {cart} = useContext(dataContext);



  return cart.length > 0 ?(
    <>
    <CartElements/>
    <CartTotal/>
    </>
  ) : (
    <h2 className="cart-mensaje">Carrito vacio 😒😒</h2>
  )
}

export default CartContent