import React,  {useState} from "react";

import '../Navbar.css'
import CartWidget from "./CartWidget/CartWidget";


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
            <a href="/" className="nav__brand">CarsShop</a>
            <ul className={active}>
                <li className="nav__item"><a href="#"></a>Inicio</li>
                <li className="nav__item"><a href="#"></a>Tienda</li>
                <li className="nav__item"><a href="#"></a>Contacto</li>
                <li className="nav__item"><a href="#"></a>Marcas</li>
                <li className="nav__item"><CartWidget/></li>
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





