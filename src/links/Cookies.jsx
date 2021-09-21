import React from "react";
import Cookie from '../images/cookie.gif';
import "./Cookies.css";

const Cookies = () => {

    return (
        <div>
            <h1 className="title">Política de Cookies</h1>
            <img className="cookieImage" src={Cookie} alt="First slide" />

            <div className="extensiveText">
                <p>
                    Debido a la entrada en vigor de la referente modificación de la “Ley de Servicios de la Sociedad de la Información” (LSSICE) establecida por el <a href="https://www.boe.es/eli/es/rdl/2012/03/30/13" target="_blank" rel="noopener noreferrer">Real Decreto 13/2012</a>, es de obligación obtener el consentimiento expreso del usuario de todas las páginas web que usan Cookies prescindibles, antes de que éste navegue por ellas.
                </p>

                <ol>
                    <li className="titleSpace">DEFINICIÓN Y FUNCIÓN DE LAS COOKIES</li>
                    <p>
                        Una cookie es un fichero que se descarga en el ordenador/Smartphone/Tablet (equipo) del usuario al acceder a determinadas páginas web para almacenar y recuperar información sobre la navegación o hábitos de navegación que se efectúa desde dicho equipo. Dependiendo de la información que contenga y de la forma de uso del equipo, se podría reconocer al usuario. Para conocer más información sobre las cookies, ARTEM, S.A. le invita a acceder al siguiente video:
                    </p>

                    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/8LaTgXMhgtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <li className="titleSpace">ESTENCIÓN DE RESPONSABILIDADES</li>
                    <ul>
                        <li className="deleleStyle">
                            <p>
                                <b>Cookies propias:</b>
                                Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.
                            </p>
                            <p>
                                <b>Cookies de tercero:</b>
                                Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
                                Cookies de sesión: Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.
                            </p>
                            <p>
                                <b>Cookies de sesión:</b>
                                Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.
                            </p>
                            <p>
                                <b>Cookies persistentes: </b>
                                Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie y que puede ir de unos minutos a varios años.
                            </p>
                            <p>
                                <b>Cookies de análisis:</b>
                                Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
                            </p>
                        </li>
                    </ul>

                    <p className="spaceTop"><b>Sobre los tipos de cookies, existen cinco grandes grupos:</b></p>
                    <ul className="deleleStyle">

                        <li>
                            <p>
                                <b>Cookies analíticas:</b>
                                recogen información del uso que se realiza del sitio web.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Cookies sociales:</b>
                                son aquellas necesarias para redes sociales externas.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Cookies de afiliados: </b>
                                permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Cookies de publicidad y comportamentales: </b>
                                recogen información sobre las preferencias y elecciones personales del usuario (retargeting).
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Cookies técnicas y funcionales:</b>
                                son las estrictamente necesarias para el uso del sitio web y para la prestación del servicio contratado.
                            </p>
                        </li>
                    </ul>

                    <li className="titleSpace">DESACTIVACIÓN, REVOCACIÓN O ELIMINACIÓN DE COOKIES</li>

                    <p>
                        El usuario podrá, en cualquier momento, permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador, en caso que no permita la instalación de cookies en su navegador es posible que no pueda acceder a alguna de las secciones de nuestra web.
                    </p>

                    <p>
                        A continuación les dejamos unos enlaces de como configurar las Cookies en los principales exploradores webs.
                    </p>

                    <ul className="deleleStyle">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                            Google Chrome </a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es" target="_blank" rel="noopener noreferrer">
                            Mozilla Firefox </a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09#:~:text=Abre%20Microsoft%20Edge%20y%20selecciona,sitio%20y%20luego%20Borrar%20ahora." target="_blank" rel="noopener noreferrer">
                            Edge </a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                            Safari  </a></li>
                    </ul>

                    <li className="titleSpace">COOKIES UTILIZADAS</li>

                    <p>
                        <b>ARTEM, S.A.</b>utiliza en este sitio web las siguientes cookies que se detallan a continuación: Cookies Analíticas
                    </p>

                    <ul className="deleleStyle" >

                        <li>
                            <p>
                                <b>utma:</b>
                                Se utiliza para hacer un recuento de cuantas veces visita el sitio un usuario. Caduca a los 2 años.
                            </p>

                            <p>
                                <b>utmz:</b>
                                Se utiliza para saber cómo ha llegado un usuario a la web. Caduca a los 6 meses.
                            </p>

                            <p>
                                <b>utmb:</b>
                                Se utiliza para calcular el tiempo que ha estado el usuario en la web para fines estadísticos. Caduca a los 30 minutos desde el último registro de página vista.
                            </p>

                            <p>
                                <b>utmc:</b>
                                Se usa para calcular el tiempo que ha estado el usuario en la web para fines estadísticos. Caduca al finalizar la sesión.
                            </p>

                            <p>
                                <b>infCookie: </b>
                                Informa si se ha visualizado el mensaje de información sobre el uso de las cookies en la web. Caduca a los 5 años.
                            </p>

                            <p>
                                <b>has_js</b>
                                Informa si se ha habilitado javascript en la configuración del navegador. Caduca cuando se cierra el navegador.
                            </p>

                            <p>
                                <b>SESS*:</b>
                                Se utiliza para almacenar el id de la sesión de PHP, siendo * un valor alfanumérico largo. Caduca cuando se cierra el navegador.
                            </p>

                            <p>
                                <b>La cookie identificadora de sesión:</b>
                                En caso de utilizar el formulario de correo, para poder utilizar el código de verificación anti-spam del formulario, con nombre PHPSESSID y contenido variable en función del identificador de sesión del navegador.
                            </p>

                            <p>
                                <b>La Cookie de dominio:</b>
                                Por donde será redireccionada la web hacia su alojamiento final, el cuál no realiza carga de ninguna otra cookie.
                            </p>

                            <p className="spaceBotton">
                                Y las cookies que cargan tanto Google como Facebook y demás redes al usar sus plugins.
                            </p>
                        </li>
                    </ul>
                </ol>
            </div>
        </div>
    );
};

export default Cookies;
