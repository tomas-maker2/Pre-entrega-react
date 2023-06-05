import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contacto.css'

// FUNCIONA EL ENVIO A MI PROPIO MAIL

function Contacto() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ypzyc8f', 'template_is713vl', form.current, 'VhAG_lmXWp9HcsqN5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <section>
      <div className="container">
        <h2 className='--text-center'>Contactanos</h2>
        <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column' action="">
          <input type="text" placeholder='Nombre' name='user_name' required/>
          <input type="email" placeholder='Email' name='user_email' required/>
          <input type="text" placeholder='Subject' name='subject' required/>
          <textarea name="Mensaje" cols="30" rows="10"></textarea>
          <button type='submit' className='--btn --btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto