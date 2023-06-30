import { dataContext } from '../Context/DataContext';
import { useContext, useState } from 'react';

function CartTotal() {
  const { cart, clearCart } = useContext(dataContext);
  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    address: '',
  });
  
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleClearCart = () => {
    clearCart();
  };

  const handleInputChange = (e) => {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPurchaseCompleted(true);
    setTimeout(() => {
      setPurchaseCompleted(false);
      clearCart();
    }, 5000);
  };

  return (
    <div className='cartTotal'>
      {purchaseCompleted ? (
        <p>¡Compra realizada con éxito!</p>
      ) : (
        <>
          <h3>Total a pagar: {total}$</h3>
          <button className='eliminar__todo' onClick={handleClearCart}>
              Eliminar todos los productos
            </button>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={checkoutData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={checkoutData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor='address'>Dirección:</label>
            <input
              type='text'
              id='address'
              name='address'
              value={checkoutData.address}
              onChange={handleInputChange}
              required
            />

            
            
            

            <button className='confirmar__compra' type='submit'>Realizar Pago</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CartTotal;