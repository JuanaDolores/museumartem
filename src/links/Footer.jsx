import React from 'react';
import "./Footer.css";
import IconFacebook from '../images/icon-facebook.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconYouTube from '../images/icon-youtube.svg';
import IconWhatsapp from '../images/icon-whatsapp.svg';

import IconEmail from '../images/email.svg';
import IconPosition from '../images/posicion.svg';
import IconTelephone from '../images/telefono.svg';
import ImageMapa from '../images/mapa.png';

import "./Legal";
import "./Cookies"
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            <footer className="bg-light ">
                <div className="container p-4 textFooter">
                    {/* Section: Contacto, Horarios y precios */}
                    <section className="section-contact">
                        <div className="row">
                            <div id="center-box" className="col-lg-3 col-md-6 mb-6 mb-md-6">
                                <h3 className="titleFooter">CONTACTO</h3>

                                <p> Museo Universitario de Arte Contemporáno<br />
                                    <img className="iconSpace" src={IconPosition} alt="icono de localización " width="16" height="16"></img>Los Balcones, 11 35001<br />
                                    Las Palmas de Gran Canaria - España</p>
                                <p>
                                    <a href="https://goo.gl/maps/wTsLmU4yVKXd3eYY8" target="_blank" rel="noopener noreferrer"><img src={ImageMapa} className="mapa" alt="Google Maps"></img></a><br />
                                    <img className="iconSpace" src={IconTelephone} alt="icono de localización " width="16" height="16"></img>
                                    +(34) 928 311800 <br />
                                    <img className="iconSpace" src={IconEmail} alt="icono de localización " width="16" height="16"></img>
                                    info@caam.net</p>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h3 className="titleFooter">HORARIO</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">LUNES</th>
                                            <td>CERRADO</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">MARTES</th>
                                            <td>10:00–18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">MIÉRCOLES</th>
                                            <td>10:00–20:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">JUEVES</th>
                                            <td>10:00–18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">VIERNES</th>
                                            <td>10:00–18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SÁBADO</th>
                                            <td>10:00–17:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">DOMINGO</th>
                                            <td>10:00–14:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h3 className="titleFooter">TARIFA</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Entrada individual general</th>
                                            <td>Taquillas / Online: 10€</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Visita individual general con guía</th>
                                            <td>Taquillas / Online: 15€</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dos visitas al Museo al año</th>
                                            <td>Online: 14,50€</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Entrada individual reducida 50%</th>
                                            <td>Taquillas 5€</td>
                                        </tr>
                                        <p>Más información en Horarios y tarifas</p>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    {/* Section: Social media */}
                    <section className="text-center p-3">
                        <a href="https://www.facebook.com/profile.php?id=100055111263725" target="_blank" rel="noopener noreferrer"><img src={IconFacebook} className="social-networks iconSpace" alt="Icono de Facebook" /></a>

                        <a href="https://twitter.com/ArtemCorporati1 " target="_blank" rel="noopener noreferrer"><img src={IconTwitter} className="social-networks iconSpace" alt="Icono de Twitter" /></a>

                        <a href="https://www.youtube.com/channel/UCj26KDaLcthPiTXWcRCTrag" target="_blank" rel="noopener noreferrer"><img src={IconYouTube} className="social-networks iconSpace" alt="Icono de YouTube" /></a>

                        <a href="https://api.whatsapp.com/send?phone=34000000000" target="_blank" rel="noopener noreferrer"><img src={IconWhatsapp} className="social-networks iconSpace" alt="Icono de YouTube" /></a>
                    </section>

                    {/* Section: Text */}
                    <section>
                        <p className="text-center p-3 textItalic textPicasso">
                            “El propósito del arte es quitar el polvo de la rutina de nuestras almas.” Pablo Picasso
                        </p>
                    </section>
                </div>
                {/* Copyright */}
                <p className="text-center p-3 textSpace">© 2021 Copyright: Las imágenes tienen derecho de autor, perteneciendo a MUAC</p>

                <div className="text-center p-3">
                    <p>
                        <Link to="/links/Legal" target="_blank" rel="noopener noreferrer">
                            Aviso Legal</Link>
                        &nbsp; y &nbsp;
                        <Link to="/links/Cookies" target="_blank" rel="noopener noreferrer">
                            Política de Cookies</Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;