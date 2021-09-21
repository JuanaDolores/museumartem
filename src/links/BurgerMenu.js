import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <div className="boxMenu">
      <Menu noOverlay onStateChange={toggleMenu}>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/links/Gallery">Galería</a>
        <a className="menu-item" href="/links/ScheduleAndPrice">Horarios y tarifas</a>
        {/* <a className="menu-item" href="/links/Legal">Legal</a>
      <a className="menu-item" href="/links/Cookies">Cookies</a> */}
      </Menu>
    </div>
  );
};

export default BurgerMenu;

