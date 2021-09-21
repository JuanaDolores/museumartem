import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

//Importación de rutas
import NavBar from './links/NavBar';
import Footer from './links/Footer';

import Home from './links/Home';
import Gallery from './links/Gallery';
import ScheduleAndPrice from './links/ScheduleAndPrice';

import logo from './logo.svg';
import BurgerMenu from './links/BurgerMenu';

import Legal from './links/Legal';
import Cookies from './links/Cookies';

import Auth from './pages/Auth';
import NuevoPost from './pages/NuevoPost';

function App() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    //Router engloba todas las rutas que podrán ser capaces de usar nuestro router
    <div>
      <Router>
        <NavBar />
        <BurgerMenu />

        <CookieConsent
          location="bottom"
          buttonText="Aceptar"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#6BABCB", padding: "15px 20px", calcWidth: (100 % -40), maxWidth: 300, borderRadius: 10, bottom: 20, left: 20, zIndex: 100, paddingTop: 60, fontWeight: "700" }}
          buttonStyle={{ color: "#fff", background: "#d5a150", fontSize: "20px" }}
          expires={150}
        >
          <img src={logo} className="App-logo" alt="logo" />

          <h3 className="titulo">Cookies</h3>
          <p className="parrafo">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.{" "}</p>
          {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
          <a
            className="enlace"
            href="/links/Cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aviso de Cookies
          </a>
        </CookieConsent>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/links/Gallery'>
            <Gallery />
          </Route>

          <Route path='/links/ScheduleAndPrice'>
            <ScheduleAndPrice />
          </Route>

          <Route path='/links/Legal'>
            <Legal />
          </Route>

          <Route path='/links/Cookies'>
            <Cookies />
          </Route>

          <Route path='/Auth'>
            <Auth />
          </Route>

          <Route path='/NuevoPost'>
            <NuevoPost />
          </Route>

          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
