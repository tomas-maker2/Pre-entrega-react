import React from 'react';

import './footer.css'
import { Link } from 'react-router-dom';

import {BsInstagram} from 'react-icons/bs'

import {BsTwitter} from 'react-icons/bs'

import {GrFacebook} from 'react-icons/gr'

import {BsYoutube} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>CarsShop</h4>
                    <ul>
                        <li>
                        <Link to={"/"} className='link'>Inicio</Link>
                        </li>
                        <li>
                        <Link to={"/tienda"} className='link'>Tienda</Link>
                        </li>
                        <li>
                        <Link to={"/contacto"} className='link'>Contacto</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Tienda</h4>
                    <ul>
                        <li>
                        <Link to={"/categoriaFerrari"} className='link'>Ferrari</Link>
                        </li>

                        <li>
                        <Link to={"/categoriaMasserati"} className='link'>Masserati</Link>
                        </li>

                        <li>
                        <Link to={"/categoriaLambo"}  className='link'>Lamborghini</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <div className="social-links">
                            <Link className='redes'><BsInstagram/></Link>
                            <Link className='redes'><BsTwitter/></Link>
                            <Link className='redes'><GrFacebook/></Link>
                            <Link className='redes'><BsYoutube/></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer