import React from 'react';
import "./NavBar.css";
import Logotype from '../images/logotype.png';

import Login from '../images/login.svg';
import Stamped from '../images/stamped.svg';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            {/* <img src={Logotype} className="logotype" alt="Logotipo del museo MUAC" /> */}

            <Link to="/">
                <img
                    src={Logotype}
                    className="logotype"
                    alt="Logotipo del museo MUAC"
                    href="/"
                />
            </Link>

            <nav id="navBar" className="navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Gallery'>Galería</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/ScheduleAndPrice'>Horarios y tarifas</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Legal'>Aviso Legal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Cookies'>Cookies</Link>
                    </li> */}

                    <Link to="/NuevoPost">
                        <img
                            src={Stamped}
                            className="iconUser iconicon"
                            alt="Primera imagen del carrousel"
                            href="/NuevoPost"
                        />
                    </Link>

                    <Link to="/Auth">
                        <img
                            src={Login}
                            className="iconUser iconUserSpace"
                            alt="Primera imagen del carrousel"
                            href="/Auth"
                        />
                    </Link>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar;