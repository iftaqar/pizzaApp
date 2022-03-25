import React from "react";

import Menu from "./Menu";
import Clients from "./Clients";
import Shop from "./Shop";
import About from "./About";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/Menu">Menu</a>
          </li>
          <li>
          <a href="/Shop">Shop</a>
          </li>
        
            <li>
          <a href="/Clients">clients</a>
          </li>
          <li>
          <a href="/About">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
