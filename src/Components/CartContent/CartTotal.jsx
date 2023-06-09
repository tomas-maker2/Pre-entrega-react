import {dataContext} from '../Context/DataContext';
import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function CartTotal() {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)

    const [isOpen, setIsOpen] = useState(false);

    const showModal = (value) => {
      setIsOpen(value);
    }

    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    window.location.reload()
  };
  
  const handleCloseMenu = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);


  return (
    <div className='cartTotal'>
        <h3>Total a pagar: {total}$</h3>
        <button className='boton' onClick={() => showModal(true)}>Finalizar compra</button>
        {isOpen && <>
          <button className='boton-1' onClick={handleShow} >Seguro que quieres confirmar la compra?</button>

      <Modal
        show={show}
        onHide={handleCloseMenu}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className='finalizar'>
            Estas seguro que quieres finalizar la compra?
          </h2>
          <p className='texto-finalizar'>Si finalizas la compra gastaras un total de <span className='total-boton'>{total}$</span> 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className='boton-confirmar' onClick={handleClose}>Finalizar compra</button>
        </Modal.Footer>
      </Modal>
      <button className='boton-2' onClick={() => showModal(false)}>No</button>
    </>}
        
    </div>
  )
}

export default CartTotal