import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <img src="../Assets/img/logo.png" alt="Logo de la page" />
        <nav>
          <ul>
            <li>
              <a href="../Pages/Home.js">Accueil</a>
            </li>
            <li>
              <a href="../Pages/Spin.js">Spin</a>
            </li>
            <li>
              <a href="../Pages/Infos.js">Infos</a>
            </li>
            <li>
              <a href="../Pages/Artistes.js">Artistes</a>
            </li>
            <li>
              <a href="../Pages/Contact.js">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
