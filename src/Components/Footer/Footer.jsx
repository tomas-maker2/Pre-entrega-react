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
                        <Link className='link'>ijsdpvnsdpv</Link>
                        </li>
                        <li>
                        <Link className='link'>ijsdpvnsdpv</Link>
                        </li>
                        <li>
                        <Link className='link'>ijsdpvnsdpv</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Tienda</h4>
                    <ul>
                        <li>
                        <Link className='link'>sapdcccccecec</Link>
                        </li>

                        <li>
                        <Link className='link'>sapdcccccecec</Link>
                        </li>

                        <li>
                        <Link className='link'>sapdcccccecec</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Tienda</h4>
                    <ul>
                        <li>
                        <Link className='link'>sapdcccccecec</Link>
                        </li>

                        <li>
                        <Link className='link'>sapdcccccecec</Link>
                        </li>

                        <li>
                        <Link className='link'>sapdcccccecec</Link>
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