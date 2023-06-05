import React,  {useState} from "react";

import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


function Navbar () {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler"); 

        const navToggle = () => {
            active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");


            // TOGGLER ICON

            toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon ("nav__toggler");
        };



    return (
        <nav className="nav">
            <Link className="nav__brand" to={"/"}>CarsShop</Link>
            <ul className={active}>
                <Link className="nav__item" to={"/"}>Inicio</Link>
                <Link className="nav__item" to={"/tienda"}>Tienda</Link>
                <Link className="nav__item" to={"/contacto"} >Contacto</Link>
                <Link className="nav__item" to={"/categoriaFerrari"} >Ferrari</Link>
                <Link className="nav__item" to={"/cart"}>
                    <CartWidget/>
                    
                </Link>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar





