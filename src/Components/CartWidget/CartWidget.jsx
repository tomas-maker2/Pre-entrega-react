import cart from './assets/Cart.svg'

const CartWidget = () => {
    return (
        <div className='cart__shop'>
            <img  src={cart} alt='cart-widget'/>
            <p>0</p>
        </div>
    )
}

export default CartWidget